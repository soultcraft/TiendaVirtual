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
  "Pantalla Super Retina XDR de 6,1 pulgadas. Descargas ultrarrápidas en 5G, ¿alto? transmisión de calidad en modo cinematográfico en 1080p a 30 fps. Grabación de vídeo HDR Dolby Vision de hasta 4K a 60 fps. Alcance de zoom óptico de 2X. Chip A15 Bionic. Nueva CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia. Nueva GPU de 4 núcleos. Nuevo Neural Engine de 16 núcleos Hasta 19 horas de reproducción de vídeo. Identificación facial. Escudo cerámico en la parte delantera. Aluminio de calidad aeroespacial, resistente al agua hasta una profundidad de 6 metros durante un máximo de 30 minutos. Compatible con accesorios MagSafe y cargadores inalámbricos"
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
  1006,
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
