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

  tarjeta.innerHTML = `
    <img src="${leyenda.imagen}" alt="${leyenda.nombre}">
    <h3>${leyenda.nombre}</h3>
    <p><strong>Región:</strong> ${leyenda.region}</p>
    <p><strong>Categoría:</strong> ${leyenda.categoria}</p>
    <p>${leyenda.descripcion}</p>
  `;

  grid.appendChild(tarjeta);
});