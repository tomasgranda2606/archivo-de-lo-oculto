const leyendas = [
{
  nombre: "El Mohán",
  region: "Colombia",
  categoria: "Criatura",
  veracidad: 3,
  descripcion: "Ser mitad hombre mitad bestia que habita los ríos y seduce a las mujeres.",
  historia: "Se dice que el Mohán vive en las profundidades de los ríos colombianos, con el cuerpo cubierto de pelo largo y ojos que brillan en la oscuridad. Le gusta enredar los anzuelos de los pescadores y esconder sus canoas como travesura. También se cuenta que seduce a las mujeres jóvenes que se bañan solas en el río, llevándolas a su cueva bajo el agua. Los campesinos de la región le dejan tabaco y aguardiente en la orilla para tenerlo contento.",
  imagen: "imagenes/elmohan.jpg"
},
{
  nombre: "El Silbón",
  region: "Venezuela / Colombia",
  categoria: "Aparición",
  veracidad: 3,
  descripcion: "Un alma en pena que silba antes de aparecer, cargando un costal de huesos.",
  historia: "Cuenta la leyenda que un joven mató a su propio padre y fue condenado por su abuelo a cargar el costal con los huesos por el resto de la eternidad. Se le reconoce por su silbido particular: si se escucha fuerte y cerca, en realidad está lejos; pero si suena débil y lejano, significa que está a punto de aparecer. Los llaneros dicen que los perros ladran sin parar cuando el Silbón anda cerca, y que solo se libra de él quien logra recordarle a su madre.",
  imagen: "imagenes/el-silbon.jpg"
},
{
  nombre: "La Casa Embrujada de Amityville",
  region: "Estados Unidos",
  categoria: "Lugar maldito",
  veracidad: 2,
  descripcion: "Una casa donde ocurrieron sucesos paranormales tras un crimen familiar.",
  historia: "En 1974, un joven asesinó a toda su familia en esta casa de Long Island mientras dormían. Un año después, una nueva familia se mudó y afirmó haber vivido apenas 28 días de terror: puertas que se abrían solas, voces susurrando desde las paredes, y una presencia que los observaba de noche. El caso se hizo tan famoso que inspiró libros y películas, aunque hasta hoy se debate si los sucesos fueron reales o una estrategia publicitaria bien lograda.",
  imagen: "imagenes/CasaEmbrujada.jpg"
},
{
  nombre: "El Chupacabras",
  region: "Puerto Rico / Latinoamérica",
  categoria: "Criatura",
  veracidad: 2,
  descripcion: "Criatura que ataca ganado y animales pequeños, dejándolos sin sangre.",
  historia: "Los primeros avistamientos se reportaron en Puerto Rico a mediados de los años 90, cuando granjeros encontraban cabras y gallinas muertas con heridas extrañas y completamente desangradas. Se le describe como una criatura reptiloide, con espinas en la espalda y ojos rojos brillantes, capaz de moverse a gran velocidad. El fenómeno se extendió rápidamente por toda Latinoamérica, y aunque muchos casos se explicaron después como ataques de animales salvajes con enfermedades, el mito sigue vivo en el imaginario popular.",
  imagen: "imagenes/chupacabras.jpg"
},
{
  nombre: "La Patasola",
  region: "Colombia",
  categoria: "Criatura",
  veracidad: 3,
  descripcion: "Mujer con una sola pierna que engaña a los hombres en la selva para devorarlos.",
  historia: "Se cuenta que fue una mujer infiel a la que su esposo descubrió y, en un ataque de celos, le cortó una pierna y la abandonó en la selva para que muriera. En lugar de morir, se convirtió en un espíritu vengativo que atrae a los hombres solitarios (especialmente leñadores y cazadores) tomando la forma de la mujer que aman, para luego revelar su verdadera apariencia y devorarlos. Se dice que grita de forma espeluznante antes de atacar, y que salta sobre una sola pierna a gran velocidad.",
  imagen: "imagenes/patasola.jpg"
},
{
  nombre: "El Triángulo de las Bermudas",
  region: "Océano Atlántico",
  categoria: "Lugar maldito",
  veracidad: 2,
  descripcion: "Zona donde barcos y aviones han desaparecido sin explicación aparente.",
  historia: "Esta zona del Atlántico, delimitada por Miami, Puerto Rico y las Bermudas, se hizo famosa por decenas de desapariciones misteriosas de barcos y aviones desde el siglo XIX. El caso más célebre es el del Vuelo 19 de la Marina de EE.UU. en 1945, cinco aviones que desaparecieron sin dejar rastro durante un entrenamiento de rutina. Se han propuesto teorías que van desde campos magnéticos anómalos hasta actividad extraterrestre, aunque estudios científicos sugieren que la cantidad de incidentes no es mayor a la de otras zonas de tráfico marítimo intenso.",
  imagen: "imagenes/triangulo.jpg"
},
{
  nombre: "La Sayona",
  region: "Venezuela",
  categoria: "Aparición",
  veracidad: 3,
  descripcion: "Espectro de una mujer que castiga a los hombres infieles apareciéndoseles de noche.",
  historia: "Cuenta la leyenda que fue una joven que, al descubrir que su esposo la engañaba con su propia madre, enloqueció de dolor y mató a ambos antes de morir maldecida. Desde entonces, se aparece de noche a los hombres infieles con la forma de una mujer hermosa vestida de blanco, para seducirlos y luego revelar su verdadero rostro putrefacto, dejándolos con vida pero marcados por el terror para siempre. Los llaneros venezolanos cuentan que se le reconoce por su llanto desgarrador, similar al de la Llorona, pero mucho más agresiva.",
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
  <p class="tarjeta-region">${leyenda.region}</p>
  `;

  tarjeta.addEventListener('click', () => {
  document.querySelector('#modal-imagen').src = leyenda.imagen;
  document.querySelector('#modal-imagen').alt = leyenda.nombre;
  document.querySelector('#modal-nombre').textContent = leyenda.nombre;
  document.querySelector('#modal-region').textContent = leyenda.region;
  document.querySelector('#modal-categoria').textContent = leyenda.categoria;
  document.querySelector('#modal-veracidad').textContent = leyenda.veracidad;
  document.querySelector('#modal-descripcion').textContent = leyenda.historia;

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

const modalFormulario = document.querySelector('#modal-formulario');
const botonAbrirFormulario = document.querySelector('#abrir-modal-formulario');
const botonCerrarFormulario = document.querySelector('#cerrar-modal-formulario');

botonAbrirFormulario.addEventListener('click', () => {
  modalFormulario.classList.remove('oculto');
});

botonCerrarFormulario.addEventListener('click', () => {
  modalFormulario.classList.add('oculto');
});

modalFormulario.addEventListener('click', (evento) => {
  if (evento.target === modalFormulario) {
    modalFormulario.classList.add('oculto');
  }
});