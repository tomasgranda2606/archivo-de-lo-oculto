const leyendas = [
  {
    nombre: "La Llorona",
    region: "México / Latinoamérica",
    categoria: "Aparición",
    veracidad: 4,
    descripcion: "Un espíritu que llora por sus hijos perdidos cerca de ríos y lagos.",
    imagen: "https://via.placeholder.com/300x180?text=La+Llorona"
  },
  {
    nombre: "El Mohán",
    region: "Colombia",
    categoria: "Criatura",
    veracidad: 3,
    descripcion: "Ser mitad hombre mitad bestia que habita los ríos y seduce a las mujeres.",
    imagen: "https://via.placeholder.com/300x180?text=El+Mohan"
  },
  {
    nombre: "El Silbón",
    region: "Venezuela / Colombia",
    categoria: "Aparición",
    veracidad: 3,
    descripcion: "Un alma en pena que silba antes de aparecer, cargando un costal de huesos.",
    imagen: "https://via.placeholder.com/300x180?text=El+Silbon"
  },
  {
    nombre: "La Casa Embrujada de Amityville",
    region: "Estados Unidos",
    categoria: "Lugar maldito",
    veracidad: 2,
    descripcion: "Una casa donde ocurrieron sucesos paranormales tras un crimen familiar.",
    imagen: "https://via.placeholder.com/300x180?text=Amityville"
  }
];

const catalogo = document.querySelector('#catalogo');

const grid = document.createElement('div');
grid.classList.add('catalogo-grid');
catalogo.appendChild(grid);

leyendas.forEach((leyenda) => {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta-leyenda');
  tarjeta.dataset.categoria = leyenda.categoria;
  tarjeta.innerHTML = `
    <img src="${leyenda.imagen}" alt="${leyenda.nombre}">
    <h3>${leyenda.nombre}</h3>
    <p><strong>Región:</strong> ${leyenda.region}</p>
    <p><strong>Categoría:</strong> ${leyenda.categoria}</p>
    <p>${leyenda.descripcion}</p>
  `;

  grid.appendChild(tarjeta);
});

const botonesFiltro = document.querySelectorAll('.filtros button');

botonesFiltro.forEach((boton) => {
  boton.addEventListener('click', () => {
    const categoriaElegida = boton.dataset.categoria;

    const todasLasTarjetas = document.querySelectorAll('.tarjeta-leyenda');

    todasLasTarjetas.forEach((tarjeta) => {
      if (categoriaElegida === 'todas' || tarjeta.dataset.categoria === categoriaElegida) {
        tarjeta.style.display = 'block';
      } else {
        tarjeta.style.display = 'none';
      }
    });
  });
});
const formulario = document.querySelector('#form-leyenda');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  let esValido = true;

  // Limpiar errores previos
  document.querySelectorAll('.error').forEach((span) => {
    span.textContent = '';
  });

  // Validar nombre de usuario
  const nombreUsuario = document.querySelector('#nombre-usuario');
  if (nombreUsuario.value.trim().length < 3) {
    document.querySelector('#error-nombre-usuario').textContent = 'El nombre debe tener al menos 3 caracteres.';
    esValido = false;
  }

  // Validar email
  const email = document.querySelector('#email');
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value.trim())) {
    document.querySelector('#error-email').textContent = 'Ingresá un email válido.';
    esValido = false;
  }

  // Validar nombre de la leyenda
  const nombreLeyenda = document.querySelector('#nombre-leyenda');
  if (nombreLeyenda.value.trim().length === 0) {
    document.querySelector('#error-nombre-leyenda').textContent = 'Este campo es obligatorio.';
    esValido = false;
  }

  // Validar región
  const region = document.querySelector('#region');
  if (region.value.trim().length === 0) {
    document.querySelector('#error-region').textContent = 'Este campo es obligatorio.';
    esValido = false;
  }

  // Validar descripción
  const descripcion = document.querySelector('#descripcion');
    if (descripcion.value.trim().length < 20) {
    document.querySelector('#error-descripcion').textContent = 'Contanos un poco más (mínimo 20 caracteres).';
    esValido = false;
  }

  // Si todo está bien
  if (esValido) {
    document.querySelector('#mensaje-exito').textContent = '¡Gracias por compartir tu leyenda!';
    formulario.reset();
  }
});

const botonHamburguesa = document.querySelector('#menu-hamburguesa');
const menuNav = document.querySelector('nav ul');

botonHamburguesa.addEventListener('click', () => {
  menuNav.classList.toggle('activo');
});
