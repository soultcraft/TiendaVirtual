class Product {
  constructor(
    id,
    image,
    alt,
    title,
    description,
    price,
    dsct,
    tax,
    color,
    specification
  ) {
    this.id = id;
    this.image = image;
    this.alt = alt;
    this.title = title;
    this.description = description;
    this.price = price;
    this.dsct = dsct;
    this.tax = tax;
    this.color = color;
    this.specification = specification;
  }
}

const prod1 = new Product(
  1001,
  [
    "./assets/iphone13/13_1.jpg",
    "./assets/iphone13/13_2.jpg",
    "./assets/iphone13/13_3.jpg",
  ],
  "Iphone 13",
  "Apple iPhone 13",
  "Iphone 13, 128 GB, rojo",
  2089.0,
  9,
  "Incluye impuesto País y percepción AFIP",
  ["rojo", "negro", "azul"],
  "* Este producto es recertificado, renovado o refabricado. Esto significa que el mismo ha sido reacondicionado o reparado por el vendedor para lucir y funcionar correctamente. El producto puede venir en caja genérica."
);
const prod2 = new Product(
  1002,
  [
    "./assets/iphone12/12_1.jpg",
    "./assets/iphone12/12_2.jpg",
    "./assets/iphone12/12_3.jpg",
  ],
  "Iphone 12",
  "Apple iPhone 12",
  "Iphone 12, 256 GB, negro",
  1789,
  18,
  "Incluye impuesto País y percepción AFIP",
  ["rojo", "negro", "azul"],
  "* Este producto es recertificado, renovado o refabricado. Esto significa que el mismo ha sido reacondicionado o reparado por el vendedor para lucir y funcionar correctamente. El producto puede venir en caja genérica."
);
const prod3 = new Product(
  1003,
  [
    "./assets/iphone11/11_1.jpg",
    "./assets/iphone11/11_2.jpg",
    "./assets/iphone11/11_3.jpg",
  ],
  "Iphone 11",
  "Apple iPhone 11",
  "Iphone 11, 64 GB, morado",
  1179,
  8,
  "Incluye impuesto País y percepción AFIP",
  ["rojo", "negro", "azul"],
  "* Este producto es recertificado, renovado o refabricado. Esto significa que el mismo ha sido reacondicionado o reparado por el vendedor para lucir y funcionar correctamente. El producto puede venir en caja genérica."
);
const prod4 = new Product(
  1004,
  [
    "./assets/iphone13mini/13m_1.jpg",
    "./assets/iphone13mini/13m_2.jpg",
    "./assets/iphone13mini/13m_3.jpg",
  ],
  "iPhone 13 mini",
  "Apple iPhone 13 mini",
  "iPhone 13 mini, 128 GB, rojo",
  1869,
  18,
  "Incluye impuesto País y percepción AFIP",
  ["rojo", "negro", "azul"],
  "* Este producto es recertificado, renovado o refabricado. Esto significa que el mismo ha sido reacondicionado o reparado por el vendedor para lucir y funcionar correctamente. El producto puede venir en caja genérica."
);
const prod5 = new Product(
  1005,
  [
    "./assets/iphonex/x_1.jpg",
    "./assets/iphonex/x_2.jpg",
    "./assets/iphonex/x_3.jpg",
  ],
  "iPhone X",
  "Apple iPhone X",
  "iPhone X, 64 GB, silver",
  879,
  18,
  "Incluye impuesto País y percepción AFIP",
  ["rojo", "negro", "azul"],
  "* Este producto es recertificado, renovado o refabricado. Esto significa que el mismo ha sido reacondicionado o reparado por el vendedor para lucir y funcionar correctamente. El producto puede venir en caja genérica."
);
const prod6 = new Product(
  1005,
  [
    "./assets/iphone13pro/13p_1.jpg",
    "./assets/iphone13pro/13p_2.jpg",
    "./assets/iphone13pro/13p_3.jpg",
  ],
  "iPhone 13 pro",
  "Apple iPhone 13 Pro",
  "iPhone 13 Pro, 128 GB, azul",
  2660,
  39,
  "Incluye impuesto País y percepción AFIP",
  ["rojo", "negro", "azul"],
  "* Este producto es recertificado, renovado o refabricado. Esto significa que el mismo ha sido reacondicionado o reparado por el vendedor para lucir y funcionar correctamente. El producto puede venir en caja genérica."
);

const products = [prod1, prod2, prod3, prod4, prod5,prod6];
