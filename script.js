const leyendas = [
  {
    nombre: "La Llorona",
    region: "México / Latinoamérica",
    categoria: "Aparición",
    veracidad: 4,
    descripcion: "Un espíritu que llora por sus hijos perdidos cerca de ríos y lagos.",
    imagen: "imagenes/lallorona.jpg"
  },
  {
    nombre: "El Mohán",
    region: "Colombia",
    categoria: "Criatura",
    veracidad: 3,
    descripcion: "Ser mitad hombre mitad bestia que habita los ríos y seduce a las mujeres.",
    imagen: "imagenes/elmohan.jpg"
  },
  {
    nombre: "El Silbón",
    region: "Venezuela / Colombia",
    categoria: "Aparición",
    veracidad: 3,
    descripcion: "Un alma en pena que silba antes de aparecer, cargando un costal de huesos.",
    imagen: "imagenes/el-silbon.jpg"
  },
  {
    nombre: "La Casa Embrujada de Amityville",
    region: "Estados Unidos",
    categoria: "Lugar maldito",
    veracidad: 2,
    descripcion: "Una casa donde ocurrieron sucesos paranormales tras un crimen familiar.",
    imagen: "imagenes/CasaEmbrujada.jpg"
  },
  {
    nombre: "El Chupacabras",
    region: "Puerto Rico / Latinoamérica",
    categoria: "Criatura",
    veracidad: 2,
    descripcion: "Criatura que ataca ganado y animales pequeños, dejándolos sin sangre.",
    imagen: "imagenes/chupacabras.jpg"
  },
  {
    nombre: "La Patasola",
    region: "Colombia",
    categoria: "Criatura",
    veracidad: 3,
    descripcion: "Mujer con una sola pierna que engaña a los hombres en la selva para devorarlos.",
    imagen: "imagenes/patasola.jpg"
  },
  {
    nombre: "El Triángulo de las Bermudas",
    region: "Océano Atlántico",
    categoria: "Lugar maldito",
    veracidad: 2,
    descripcion: "Zona donde barcos y aviones han desaparecido sin explicación aparente.",
    imagen: "imagenes/triangulo.jpg"
  },
  {
    nombre: "La Sayona",
    region: "Venezuela",
    categoria: "Aparición",
    veracidad: 3,
    descripcion: "Espectro de una mujer que castiga a los hombres infieles apareciéndoseles de noche.",
    imagen: "imagenes/sayona.jpg"
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
  tarjeta.addEventListener('click', () => {
    document.querySelector('#modal-imagen').src = leyenda.imagen;
    document.querySelector('#modal-imagen').alt = leyenda.nombre;
    document.querySelector('#modal-nombre').textContent = leyenda.nombre;
    document.querySelector('#modal-region').textContent = leyenda.region;
    document.querySelector('#modal-categoria').textContent = leyenda.categoria;
    document.querySelector('#modal-veracidad').textContent = leyenda.veracidad;
    document.querySelector('#modal-descripcion').textContent = leyenda.descripcion;

    document.querySelector('#modal').classList.remove('oculto');
  });
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

const modal = document.querySelector('#modal');
const botonCerrarModal = document.querySelector('#cerrar-modal');

botonCerrarModal.addEventListener('click', () => {
  modal.classList.add('oculto');
});

modal.addEventListener('click', (evento) => {
  if (evento.target === modal) {
    modal.classList.add('oculto');
  }
});