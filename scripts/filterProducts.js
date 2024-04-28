const searchSelector = document.querySelector("#search");

// Ejecutar la funcion segun el evento del input
searchSelector.addEventListener("keyup", (event) => captureText(event));

// funcion de filtrado
function captureText(event) {
  //Variable que almacena el texto del input
  let contSearch = event.target.value;
  // Variable que almacenara los productos filtrados segun "contSearch"
  let filterProduct = products.filter((product) =>
    //funcion que filtra el array "product" segun la variable "contSearch"
    product.title.toLowerCase().includes(contSearch.toLowerCase())
  );
  // Ejecuta la funcion para volver a imprimir los productos segun la variable "filterProduct"
  printCards(filterProduct, "products");
}
