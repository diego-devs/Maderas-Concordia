export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  audience: string;
  image: string;
  pageTitle: string;
  metaDescription: string;
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categorySlugs: string[];
  images: string[];
};

export const categories: Category[] = [
  {
    slug: "maderas-finas",
    name: "Maderas finas",
    shortName: "Maderas finas",
    description:
      "Selección de especies con veta protagonista, estabilidad y presencia para carpintería de alto valor, mobiliario y diseño interior.",
    audience: "Para ebanistería, mobiliario premium y proyectos residenciales o comerciales con carácter.",
    image:
      "https://static.wixstatic.com/media/4b9c17_582fea6fd07a460dbde6ff2bf6d4ad7a~mv2.jpg/v1/fit/w_900,h_700,q_90/file.jpg",
    pageTitle: "Maderas finas | Maderas Concordia",
    metaDescription:
      "Maderas finas y especies de alto valor para muebles, carpintería y proyectos con acabados premium.",
  },
  {
    slug: "decks-tableros",
    name: "Decks y tableros",
    shortName: "Decks y tableros",
    description:
      "Tableros y soluciones versátiles para interiores, carpintería, recubrimientos y aplicaciones decorativas o funcionales.",
    audience: "Para talleres, interiorismo, fabricación de mobiliario y soluciones de acabado.",
    image:
      "https://static.wixstatic.com/media/4b9c17_27f83bf37e2f406a99253d3a13d42bd7~mv2.jpg/v1/fit/w_900,h_700,q_90/file.jpg",
    pageTitle: "Decks y tableros | Maderas Concordia",
    metaDescription:
      "Tableros, MDF, melaminas, triplay y soluciones para carpintería, diseño y fabricación.",
  },
  {
    slug: "construccion",
    name: "Construcción",
    shortName: "Construcción",
    description:
      "Maderas y productos seleccionados por rendimiento, resistencia y disponibilidad para obra, estructura y procesos constructivos.",
    audience: "Para constructoras, contratistas, obra civil y proyectos que requieren material confiable.",
    image:
      "https://static.wixstatic.com/media/4b9c17_98356658a4f64d2ebf73667c4f2c7b0b~mv2.jpg/v1/fit/w_900,h_700,q_90/file.jpg",
    pageTitle: "Construcción | Maderas Concordia",
    metaDescription:
      "Productos de madera para construcción, estructura, cimbra y soluciones de obra en Querétaro.",
  },
  {
    slug: "industrial",
    name: "Industrial",
    shortName: "Industrial",
    description:
      "Soluciones de embalaje y logística en madera pensadas para transporte, resguardo y operación industrial.",
    audience: "Para exportación, almacenaje, manufactura y necesidades de embalaje certificado.",
    image:
      "https://static.wixstatic.com/media/4b9c17_65abd5b874eb41e9a0a06620b4944762~mv2.jpg/v1/fit/w_900,h_700,q_90/file.jpg",
    pageTitle: "Industrial | Maderas Concordia",
    metaDescription:
      "Tarimas, cajas, carretes y soluciones industriales en madera para logística y exportación.",
  },
  {
    slug: "diseno-construccion",
    name: "Diseño y construcción",
    shortName: "Diseño y construcción",
    description:
      "Materiales que equilibran presencia visual, desempeño exterior y versatilidad para proyectos arquitectónicos y paisajismo.",
    audience: "Para decks, exteriores, arquitectura y proyectos donde la estética importa tanto como la durabilidad.",
    image:
      "https://static.wixstatic.com/media/4b9c17_98356658a4f64d2ebf73667c4f2c7b0b~mv2.jpg/v1/fit/w_900,h_700,q_90/file.jpg",
    pageTitle: "Diseño y construcción | Maderas Concordia",
    metaDescription:
      "Materiales de madera para proyectos de diseño y construcción con enfoque arquitectónico y funcional.",
  },
];

export const products: Product[] = [
  { slug: "nogal-peruano", name: "Nogal Peruano", shortDescription: "Similar al nogal tradicional, pero con un color más oscuro y una veta más exótica.", description: "Similar al nogal tradicional, pero con un color más oscuro y una veta más exótica. Es una madera fuerte y estable, perfecta para muebles de lujo.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_24aa7a4dc090411daf67fc3722a42b21~mv2.webp/v1/fit/w_900,h_900,q_90/file.webp"] },
  { slug: "cedro-rojo-odorata", name: "Cedro Rojo Odorata", shortDescription: "Madera fina muy valorada por su trabajabilidad, estabilidad dimensional y resistencia natural.", description: "El Cedro Rojo es una de las maderas finas más valoradas en el mercado gracias a su excelente trabajabilidad, estabilidad dimensional y resistencia natural a plagas.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_cb60c1ba1f35463d81b60f32e9926de6~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "triplay-film", name: "Triplay Film", shortDescription: "Tablero para obra con film face y alta resistencia para múltiples usos.", description: "Elaborado con capas de maderas naturales y protección en caras con film face. Ofrece mayor rendimiento en obra y una resistencia superior al triplay común.", categorySlugs: ["construccion"], images: ["https://static.wixstatic.com/media/4b9c17_14dbd6d6b37748ed936277055554ea03~mv2.webp/v1/fit/w_900,h_900,q_90/file.webp"] },
  { slug: "madera-para-cimbra", name: "Madera para Cimbra", shortDescription: "Material funcional para procesos de colado y soporte temporal en obra.", description: "Solución práctica para cimbra y trabajo estructural temporal, con disponibilidad para necesidades de construcción y rendimiento en sitio.", categorySlugs: ["construccion"], images: ["https://static.wixstatic.com/media/4b9c17_b4a538fd0cfc4d98adab1579a2fb011b~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "nogal-americano", name: "Nogal Americano", shortDescription: "Madera lujosa con tono marrón profundo y vetas elegantes.", description: "Una de las maderas más lujosas del mercado. Su dureza y estabilidad la convierten en la elección ideal para mobiliario de alto valor y acabados premium.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_2a2bc6b9183d4c26a9760bfec3c0b040~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "tablones-de-pino-americano", name: "Tablones de Pino Americano", shortDescription: "Tablones listos para soluciones estructurales y de fabricación.", description: "Tablones de pino americano para obra, carpintería estructural y aplicaciones donde se necesita estabilidad y disponibilidad.", categorySlugs: ["construccion"], images: ["https://static.wixstatic.com/media/4b9c17_d39f8d0d0b6c40a39eea94a6acd34630~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "vigas-h20", name: "Vigas H20", shortDescription: "Elemento auxiliar para sistemas de cimbra y estructura temporal.", description: "Vigas H20 para aplicaciones de construcción que requieren capacidad de carga, repetición de uso y confiabilidad en obra.", categorySlugs: ["construccion"], images: ["https://static.wixstatic.com/media/4b9c17_b871f06734304709bc5870fc2efcc5d3~mv2.jpeg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "rauli", name: "Raulí", shortDescription: "Madera de tono rosado y veta fina que aporta calidez.", description: "Su tono rosado y veta fina aportan calidez a cualquier espacio. Es moderadamente dura y fácil de trabajar, perfecta para muebles y revestimientos.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_12b5a741c582483797189d41657fe826~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "polines", name: "Polines", shortDescription: "Soporte en madera para techumbres, andamios y estructuras temporales.", description: "Resistencia y estabilidad en cada pieza. Ideales para soportar cargas en techumbres, andamios y estructuras temporales. Disponibles en pino y oyamel.", categorySlugs: ["construccion"], images: ["https://static.wixstatic.com/media/4b9c17_399c331ff1da4238be6fdfc560f0c9ef~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "caoba", name: "Caoba", shortDescription: "Clásico de elegancia con tono rojizo profundo y veta uniforme.", description: "Madera noble, fácil de trabajar, resistente y con un acabado espectacular, ideal para muebles de lujo y ebanistería fina.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_08b69ad24ff24b588acf0adaff2ebb2b~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "poplar", name: "Poplar", shortDescription: "Opción versátil de color claro y veta suave.", description: "Ideal para carpintería, molduras y estructuras internas de muebles gracias a su facilidad de trabajo y apariencia uniforme.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_19bbd82a62894313a48d31d8d82e1e63~mv2.webp/v1/fit/w_900,h_900,q_90/file.webp"] },
  { slug: "osb", name: "OSB", shortDescription: "Tablero estructural de alta resistencia mecánica y estabilidad dimensional.", description: "Fabricado con virutas de madera orientadas en capas cruzadas, ideal para muros, techos y entrepisos en construcción ligera y pesada.", categorySlugs: ["decks-tableros"], images: ["https://static.wixstatic.com/media/4b9c17_5d25260dd1294c5d9534f1e1d4915fa5~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "parota-guanacaxtle", name: "Parota (Guanacaxtle)", shortDescription: "Madera de tonos dorados y vetas pronunciadas con gran personalidad.", description: "Combina dureza y ligereza, ideal para mesas, puertas y piezas decorativas con fuerte presencia visual.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_55a0c0e914a34d3db0d6efce89e3af95~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "mdf-enchapado", name: "MDF Enchapado", shortDescription: "MDF revestido con madera natural para acabados elegantes.", description: "Ofrece la apariencia de la madera maciza con la estabilidad del MDF. Solución práctica para mobiliario y recubrimientos interiores.", categorySlugs: ["decks-tableros"], images: ["https://static.wixstatic.com/media/4b9c17_265896a9ab2b4b29be61932a3bdea16d~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "melaminas", name: "Melaminas", shortDescription: "Tableros recubiertos disponibles en múltiples colores, texturas y acabados.", description: "Tablero de aglomerado o MDF recubierto con resina melamínica. Funcional para interiores, mobiliario y proyectos con control de presupuesto.", categorySlugs: ["decks-tableros"], images: ["https://static.wixstatic.com/media/4b9c17_7561def1814840b9af39fcafec8cd1a8~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "cedro-rojo", name: "Cedro Rojo", shortDescription: "Madera cálida y aromática con gran aceptación en carpintería fina.", description: "Una opción de alto valor para interiores, mobiliario y piezas donde se busca estabilidad, belleza natural y facilidad de manufactura.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_0b983309f06e40cfb370f8fdf41463b1~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "triplay", name: "Triplay", shortDescription: "Triplay disponible en pino y en maderas finas para usos múltiples.", description: "Panel versátil para fabricación, recubrimientos y soluciones de carpintería con distintas especies y acabados.", categorySlugs: ["decks-tableros"], images: ["https://static.wixstatic.com/media/4b9c17_8749d05bf33d4db18fbb04f6fffd449a~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "triplay-enchapado", name: "Triplay Enchapado", shortDescription: "Triplay con chapa natural para una vista más cálida y decorativa.", description: "Ideal para muebles, panelados y soluciones donde se busca la practicidad del triplay con un acabado más noble.", categorySlugs: ["decks-tableros"], images: ["https://static.wixstatic.com/media/4b9c17_7dcb8f8660c44903ab90d9384a7c733b~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "molduras-y-zoclos", name: "Molduras y Zoclos", shortDescription: "Elementos de terminación para interiores y carpintería arquitectónica.", description: "Perfiles decorativos y funcionales para remates, marcos y soluciones de acabado con estética cuidada.", categorySlugs: ["decks-tableros"], images: ["https://static.wixstatic.com/media/4b9c17_842d863f14b742d78e6a8685df749795~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "haya", name: "Haya", shortDescription: "Especie de veta fina y tono claro para interiores y mobiliario.", description: "Madera estable y agradable al trabajo, ideal para fabricación de muebles, cubiertas y soluciones interiores.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_87d85d68d8b4486482ec949d72be48ae~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "teka", name: "Teka", shortDescription: "Madera conocida por su resistencia natural y desempeño en exterior.", description: "Material premium muy apreciado para exteriores, mobiliario y piezas con exposición a humedad o cambios ambientales.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_31818d4117514769bc6fe65f473fc798~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "cumuru", name: "Cumarú", shortDescription: "Madera de alto desempeño para exteriores, decks y proyectos expuestos.", description: "Excelente opción para aplicaciones arquitectónicas donde se busca resistencia, larga vida útil y una presencia natural contundente.", categorySlugs: ["diseno-construccion"], images: ["https://static.wixstatic.com/media/4b9c17_f4774cb0701a4f4cad65ed80f7972a9f~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "triplay-alistonado", name: "Triplay Alistonado", shortDescription: "Tablero con apariencia continua y carácter cálido para mobiliario.", description: "Solución decorativa y estructural para cubiertas, muebles y aplicaciones interiores donde se busca presencia natural.", categorySlugs: ["decks-tableros"], images: ["https://static.wixstatic.com/media/4b9c17_95b51462e6ed4197b972e58813b2c99c~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "tablones-de-pino-nacional", name: "Tablones de Pino Nacional", shortDescription: "Tablones funcionales para obra, carpintería y estructura ligera.", description: "Material disponible para distintas necesidades de construcción y manufactura con enfoque práctico y competitivo.", categorySlugs: ["construccion"], images: ["https://static.wixstatic.com/media/4b9c17_2de34f9167e34bd0af6cf32a8edc3791~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "banack", name: "Banack", shortDescription: "Madera con personalidad visual para diseño arquitectónico y exterior.", description: "Buena opción para proyectos especiales donde se priorizan textura, apariencia y desempeño en soluciones de diseño.", categorySlugs: ["diseno-construccion"], images: ["https://static.wixstatic.com/media/4b9c17_9668906763f04bd3b4622f292decd76c~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "aglomerados", name: "Aglomerados", shortDescription: "Alternativa económica y funcional para mobiliario e interiores.", description: "Panel práctico para proyectos productivos, líneas comerciales y soluciones donde importa optimizar presupuesto sin perder funcionalidad.", categorySlugs: ["decks-tableros"], images: ["https://static.wixstatic.com/media/4b9c17_f15514a4d8654235902833da9fca738b~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "tarimas-para-exportacion", name: "Tarimas para Exportación", shortDescription: "Tarimas resistentes y certificadas para logística y exportación.", description: "Diseñadas para durabilidad, maniobra y cumplimiento en operaciones industriales y de comercio exterior.", categorySlugs: ["industrial"], images: ["https://static.wixstatic.com/media/4b9c17_0d978c61e7c54c0da8d1e00fc4fbe137~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "encino-americano", name: "Encino Americano", shortDescription: "Madera noble con veta distinguida y gran aceptación en diseño interior.", description: "Ideal para mobiliario, cubiertas y carpintería premium gracias a su combinación de carácter visual, estabilidad y trabajabilidad.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_23cba8fd45fa4c24aa9c79f55f67df73~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "celotex", name: "Celotex", shortDescription: "Material auxiliar para construcción y soluciones de obra.", description: "Producto complementario para necesidades constructivas donde se requiere practicidad, disponibilidad y rendimiento en sitio.", categorySlugs: ["construccion"], images: ["https://static.wixstatic.com/media/4b9c17_24195f7ef50548069544f3e3a24d5569~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "carretes-para-cable", name: "Carretes para Cable", shortDescription: "Soluciones de madera para manejo, almacenamiento y transporte de cableado.", description: "Carretes robustos pensados para operación industrial, logística y resguardo seguro de materiales enrollables.", categorySlugs: ["industrial"], images: ["https://static.wixstatic.com/media/4b9c17_1a9ac88d099247d590f920b1889049d0~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "lambrin", name: "Lambrín", shortDescription: "Revestimiento de madera para interiores cálidos y con textura.", description: "Solución decorativa para muros y plafones que ayuda a construir ambientes naturales y acogedores.", categorySlugs: ["decks-tableros"], images: ["https://static.wixstatic.com/media/4b9c17_58f5176e3a5a495ea1d4d30be0c675b8~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "mdf-natural", name: "MDF Natural", shortDescription: "Tablero uniforme para fabricación, pintura y mecanizados precisos.", description: "Alternativa versátil para carpintería, mobiliario y aplicaciones interiores donde se requiere superficie estable y homogénea.", categorySlugs: ["decks-tableros"], images: ["https://static.wixstatic.com/media/4b9c17_d61d4dabeb4b455bb2e1f4ac5703d814~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "iroko", name: "Iroko", shortDescription: "Especie resistente con gran carácter visual para interior y exterior.", description: "Apreciada por su durabilidad y tono cálido, útil en proyectos arquitectónicos, carpintería y soluciones expuestas.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_5a1cb7c89bc5485f8f4d8fa476d20d40~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "vigas", name: "Vigas", shortDescription: "Piezas estructurales para soporte y construcción.", description: "Madera para aplicaciones estructurales que requieren sección, resistencia y respuesta confiable en obra.", categorySlugs: ["construccion"], images: ["https://static.wixstatic.com/media/4b9c17_f00b72f5450f4f0a98db8aa5c566e597~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "bocote", name: "Bocote", shortDescription: "Madera exótica de veta intensa para piezas especiales.", description: "Muy atractiva para mobiliario, acentos decorativos y proyectos donde la textura y el dibujo natural son protagonistas.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_1a568d0f5de34800bfd2074e21465b7f~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "nogal-nacional", name: "Nogal Nacional", shortDescription: "Especie mexicana de gran presencia y calidez natural.", description: "Excelente para mesas, cubiertas y mobiliario donde se busca una madera noble con tono profundo y personalidad.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_6dbbd145d7af45bf9277447e14bc96b6~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "duelas", name: "Duelas", shortDescription: "Piezas de madera para revestimiento y soluciones interiores o exteriores.", description: "Material útil para pisos, muros o recubrimientos según especificación del proyecto y el acabado deseado.", categorySlugs: ["decks-tableros"], images: ["https://static.wixstatic.com/media/4b9c17_8025dc00d88b4d8a8f1f7410bdd17364~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "tzalam", name: "Tzalam", shortDescription: "Madera tropical de tono oscuro muy buscada en diseño contemporáneo.", description: "Aporta elegancia y gran carácter en cubiertas, mobiliario, decks y proyectos de interiorismo o exterior selecto.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_43818492a5004a7ca35d74e59594538f~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "congona", name: "Congona", shortDescription: "Madera con personalidad y aplicaciones de carpintería especializadas.", description: "Opción para proyectos que requieren presencia visual, resistencia y una identidad distinta en acabado natural.", categorySlugs: ["maderas-finas"], images: ["https://static.wixstatic.com/media/4b9c17_aee6a8e2d8ee48a180fd1ef8940bbfb7~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "gualdras", name: "Gualdras", shortDescription: "Elementos robustos para estructura y apoyo en construcción.", description: "Pensadas para aplicaciones de carga y soporte en obra, con enfoque en resistencia y funcionalidad.", categorySlugs: ["construccion"], images: ["https://static.wixstatic.com/media/4b9c17_4f7e1629268f4762b64f761dc8d5df28~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "pino", name: "Pino", shortDescription: "Material versátil para obra, carpintería y múltiples procesos productivos.", description: "Una de las especies más funcionales por disponibilidad, facilidad de trabajo y amplio rango de aplicaciones.", categorySlugs: ["construccion"], images: ["https://static.wixstatic.com/media/4b9c17_9f8e6ecf38734209bfbcbe234526c89f~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "barrotes", name: "Barrotes", shortDescription: "Piezas dimensionadas para estructura ligera, soporte y carpintería funcional.", description: "Solución práctica para bastidores, refuerzos y distintos trabajos de obra o fabricación.", categorySlugs: ["construccion"], images: ["https://static.wixstatic.com/media/4b9c17_488331edcba54e3891f6159803c5ab99~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
  { slug: "cajas-de-madera", name: "Cajas de Madera", shortDescription: "Cajas para exportación con tratamiento térmico y protección de mercancía.", description: "Solución industrial para empaque, resguardo y transporte con enfoque en resistencia, cumplimiento y manejo seguro.", categorySlugs: ["industrial"], images: ["https://static.wixstatic.com/media/4b9c17_4d4ecab9ec684f4d8cbf8d6f2d5d4a65~mv2.jpg/v1/fit/w_900,h_900,q_90/file.jpg"] },
];
