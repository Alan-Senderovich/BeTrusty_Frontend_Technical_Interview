import { FaPencilAlt } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import { ReservationCard, ApartmentDetails } from "@/components";
import { Button } from "@/components/common";
import { DataItem } from "@/types";

const data: DataItem[] = [
  {
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
          "Este hermoso apartamento de 2 habitaciones se encuentra en el corazón de la ciudad, a solo unos pasos de los mejores restaurantes, tiendas y lugares de interés turístico. El apartamento es ideal para qaquellos que buscan un espacio cómodo y acogedor en el que relajarse después de un largo día de trabajo o de turismo.",
      },
      valuePerNight: 60,
      images: ["example.jpg", "example2.jpg", "example3.jpg", "example4.jpg"],
    },
    owner: {
      name: "Elon Musk",
    },
  },
];

const ApartmentDetailView = () => {
  return (
    <article className="apartmentView__container">
      <section className="apartmentView__headerSection">
        <h3>{data[0].apartment.name}</h3>
        <div className="flex-center gap-3">
          <div className="rounded-full overflow-hidden h-[30px] w-[30px] bg-secondary-blue flex items-center justify-center cursor-pointer">
            <FaPencilAlt size={20} color="#33eaff" />
          </div>
          <div className="rounded-full overflow-hidden h-[30px] w-[30px] bg-light-blue flex items-center justify-center cursor-pointer">
            <RiShareForwardFill size={20} color="#0f172a" />
          </div>
        </div>
      </section>
      <section className="apartmentView__imagesSection">
        Galeria y slider mobile
      </section>
      <section className="apartmentView__detailsSection">
        <div className="apartmentView__reservation-wrapper">
          <ReservationCard />
          <Button variant="default">Invitar inquilino</Button>
        </div>
        <ApartmentDetails
          details={data[0].apartment.details}
          owner={data[0].owner.name}
        />
      </section>
    </article>
  );
};

export default ApartmentDetailView;
