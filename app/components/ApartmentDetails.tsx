import { ApartmentDetailsData } from "@/types";
import Image from "next/image";
import { FaBed } from "react-icons/fa";
import { ApartmentDetailsItem } from "@/components";
import { FaLocationDot } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { MdBathtub } from "react-icons/md";
import { IoIosWifi, IoMdCar } from "react-icons/io";

interface ApartmentDetailsProps {
  details: {
    items: ApartmentDetailsData;
    description: string;
  };
  owner: string;
}

const ApartmentDetails = ({
  details: { items, description },
  owner,
}: ApartmentDetailsProps) => {
  return (
    <article className="apartmentDetails__container">
      {items && (
        <>
          <ApartmentDetailsItem>
            <FaLocationDot size={30} color="#33eaff" />
            <p>{items.address}</p>
          </ApartmentDetailsItem>
          <ApartmentDetailsItem>
            <TiHome size={30} color="#33eaff" />
            <p>{items.type}</p>
          </ApartmentDetailsItem>
          <ApartmentDetailsItem>
            <FaBed size={30} color="#33eaff" />
            <p>{`${items.roomsQuantity} ${
              items.roomsQuantity === 1 ? "habitación" : "habitaciones"
            }`}</p>
          </ApartmentDetailsItem>
          <ApartmentDetailsItem>
            <MdBathtub size={30} color="#33eaff" />
            <p>{`${items.bathroomQuantity} ${
              items.bathroomQuantity === 1 ? "baño" : "baños"
            }`}</p>
          </ApartmentDetailsItem>
          {items.hasWifi && (
            <ApartmentDetailsItem>
              <IoIosWifi size={30} color="#33eaff" />
              <p>WIFI</p>
            </ApartmentDetailsItem>
          )}
          {items.hasFreeParking && (
            <ApartmentDetailsItem>
              <IoMdCar size={30} color="#33eaff" />
              <p>Estacionamiento gratuito</p>
            </ApartmentDetailsItem>
          )}
        </>
      )}
      {description && (
        <div className="py-6 flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Descripción</h3>
          <p className="w-full lg:w-[75%]">{description}</p>
        </div>
      )}
      {owner && (
        <div className="py-6 flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Propietario</h3>
          <div className="flex items-center gap-4">
            <div className="rounded-full overflow-hidden h-auto w-auto">
              <Image alt="avatar" src="/profile.webp" width={50} height={50} />
            </div>
            <p className="w-full lg:w-[75%]">{owner}</p>
          </div>
        </div>
      )}
    </article>
  );
};

export default ApartmentDetails;
