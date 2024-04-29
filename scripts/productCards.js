// Función para llenar el contenido de los productos (Plantilla)
function createCard(product) {
  return `
  <article class="product-card" href="./details.html">
  <a href="./details.html?id=${product.id}">
      <div class="img-container">
        <img class="product-img" src="${product.image[0]}" alt="${product.alt}">
      </div>
      <div class="product-info">
          <span class="product-title">${product.title}</span>
          <span class="product-description">${product.description}</span>
          <div class="product-price-block">
              <span class="price">S/.${product.price}</span>
              <span class="discount">${product.dsct}% Off</span>
          </div>
          <div class="product-tax-policy">${product.tax}</div>
      </div>
  </a>
  </article>
    `;
}
// Función para imprimir las tarjetas de venta
function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  for (let element of arrayOfProducts) {
    productsTemplate += createCard(element);
  }
  const productSelector = document.getElementById(idSelector);
  productSelector.innerHTML = productsTemplate;
}

printCards(products,"products");
