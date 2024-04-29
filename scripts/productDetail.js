// Almacena la seccion "search" del la URL
const query = location.search;
// Variable con el objeto a partir de la cadena "query"
const params = new URLSearchParams(query);
// variable que almacena solo la seccion "id"
const id = Number(params.get("id"));

function printDetails(id) {
  const product = products.find((product) => product.id === id);

  const detailsTemplate = `
  <div class="product-images-block">
${product.image
  .map(
    (image) =>
      `<div class="thumbnail-container"><img src="${image}" alt="${product.alt}" onclick="changeMini(event)"/></div>`
  )
  .join("")}
  <img id="bigImg" class="main-image" src="${product.image[0]}" alt="${product.alt}"></div>

    <div class="product-description-block">
        <h1 class="titulo">${product.title}</h1>
        <form action="" class="selector">
            <fieldset>
                <label for="color" class="label">Color</label>
                <select type="text" placeholder="Selecciona un color">
                    ${product.color
                      .map(
                        (color) => `<option value="${color}">${color}</option>`
                      )
                      .join("")}
                </select>
            </fieldset>
        </form>
        <div class="description">
            <h1>Descripción:</h1>
            <p>${product.specification}</p>
        </div>
    </div>
    <div class="product-checkout-block">
        <div class="checkout-container">
            <span class="checkout-total-label">Total:</span>
            <h2 id="price" class="checkout-total-price">S/. ${product.price}</h2>
            <p class="checkout-description">${product.tax}</p>
            <ul class="checkout-policy-list">
                <li>
                    <span class="policy-icon"><img src="./assets/truck.png" alt="Truck" /></span>
                    <span class="policy-desc">Agrega el producto al carrito para conocer los costos de envío</span>
                </li>
                <li>
                    <span class="policy-icon"><img src="./assets/plane.png" alt="Plane" /></span>
                    <span class="policy-desc">Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal</span>
                </li>
            </ul>
            <div class="checkout-process">
                <div class="top">
                    <input type="number" min="1" value="1" onchange="changeSubtotal(event)"/>
                    <button class="btn-primary">Comprar</button>
                </div>
                <div class="bottom">
                    <button class="btn-outline">Añadir al Carrito</button>
                </div>
            </div>
        </div>
    </div>
    `;
  const detailsSelector = document.querySelector("#details");
  detailsSelector.innerHTML = detailsTemplate;
}
printDetails(id);

function changeMini (event) {
    const selectSrc = event.target.src;
    const bigSelector = document.querySelector("#bigImg");
    bigSelector.src = selectSrc;
}

function changeSubtotal (event) {
    const quantity = event.target.value;
    const product = products.find(product => product.id == id)
    const subTotal = quantity * product.price
    const priceSelector = document.querySelector("#price")
    priceSelector.innerHTML = `S/. ${quantity * product.price}`

    console.log(subTotal);
    console.log(product.price);
}

/*
// bloque imagenes

const getImgDetails = (product) => {
    let imgDet = product.image.map(
      (img) => `
      <div class="product-images-block">
      <div class="thumbnail-container">
          <img src="${img}" alt="${product.alt}">
      </div>`
    );
    return `
      ${imgDet.join("")}
      <img class="main-image" src="${product.image[0]}" alt="${
      product.alt
    }"></div>
      `;
  };
  
  // bloque colores y descripción
  
  // bloque precio y compra
  */
