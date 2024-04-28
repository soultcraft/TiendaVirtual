// SECCION NAV

const navSelector = document.getElementById("nav");

const options = [
  { title: "Ofertas de la semana", linkTo: "./outlet.html" },
  { title: "Productos", linkTo: "./how.html" },
  { title: "Contactos", linkTo: "./taxs.html" },
  { title: "Marcas", linkTo: "./orders.html" },
];

const navUl = document.createElement("ul");
for (let option of options) {
  const navLi = document.createElement("li");
  const navA = document.createElement("a");
  navA.textContent = option.title;
  navA.href = option.linkTo;
  navLi.appendChild(navA);
  navUl.appendChild(navLi);
}
navSelector.appendChild(navUl);

// SECCION FOOTER

const footerSelector = document.querySelector("#footer");

const options1 = [
  {
    title: "Ofertas de la semana",
    opts: ["Laptops", "Audio", "Auticulares"],
    link1: "##1",
    link2: ["#11", "#12", "#13"],
  },
  {
    title: "Cómo comprar",
    opts: ["Formas de pago", "Envios", "Devoluciones"],
    link1: "##2",
    link2: ["#21", "#22", "#23"],
  },
  {
    title: "Costos y tarifas",
    opts: ["Impuestos", "Facturación"],
    link1: "##3",
    link2: ["#31", "#32"],
  },
  {
    title: "Mis pedidos",
    opts: ["Pedir nuevamente", "Lista de deseos"],
    link1: "##4",
    link2: ["#41", "#42"],
  },
  { title: "Garantía de entrega", opts: [], link1: "##5", link2: [] },
];

for (let option of options1) {
  // Crea el elemento div
  let footDiv = document.createElement("div");
  footDiv.classList.add("col");
  // Crea el elemento ul
  let footUl = document.createElement("ul");
  //Primer elemento li
  let footLi = document.createElement("li");
  footLi.classList.add("col-main-item");
  //Crear elementos a
  let footA = document.createElement("a");
  footA.href = option.link1;
  footA.textContent = option.title;

  //Agregar el contenido al elemento li - ul
  footLi.appendChild(footA);
  footUl.appendChild(footLi);

  //Agregar las opciones
  let varHref = 0;
  option.opts.forEach(function (option2) {
    let opLi = document.createElement("li");
    let opA = document.createElement("a");
    opA.href = option.link2[varHref];
    opA.textContent = option2;
    opLi.appendChild(opA);
    footUl.appendChild(opLi);
    varHref++;
  });
  //Agregar las opciones ul a div
  footDiv.appendChild(footUl);
  //Agregar div al id del footer
  footerSelector.appendChild(footDiv);
}
