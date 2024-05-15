import { IApartment } from "@/types";

export const images: string[] = [
  "https://i.postimg.cc/tTyWQ09Q/Osofsky-Oct19-5.webp",
  "https://i.postimg.cc/50v69YHT/image-2.jpg",
  "https://i.postimg.cc/Pq57kY7f/image-3.jpg",
  "https://i.postimg.cc/BnVTXF6n/image-4.jpg",
  "https://i.postimg.cc/tgGgSRvz/principal-image.jpg",
];

export const selectedApartmentMock: IApartment = {
  id: "1",
  apartment: {
    name: "Frank Apart",
    details: {
      items: {
        address: "Av. San Martín 315, Mendoza, Argentina",
        type: "Departamento",
        roomsQuantity: 3,
        bathroomQuantity: 1,
        hasWifi: true,
        hasFreeParking: true,
      },
      description:
        "Este hermoso apartamento de 2 habitaciones se encuentra en el corazón de la ciudad, a solo unos pasos de los mejores restaurantes, tiendas y lugares de interés turístico. El apartamento es ideal para aquellos que buscan un espacio cómodo y acogedor en el que relajarse después de un largo día de trabajo o de turismo.",
    },
    pricePerNight: 60,
    images: [
      "https://i.postimg.cc/QC2JgNnT/Osofsky-Oct19-5-11zon.webp",
      "https://i.postimg.cc/s23HfpXD/image-2-11zon.jpg",
      "https://i.postimg.cc/0ysDfBZh/image-3-11zon.jpg",
      "https://i.postimg.cc/6QKc8QD2/image-4-11zon.jpg",
      "https://i.postimg.cc/dtdS3gLf/principal-image-11zon.jpg",
    ],
  },
  owner: {
    name: "Elon Musk",
  },
};
