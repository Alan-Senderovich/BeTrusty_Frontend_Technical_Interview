
import React from "react";
import { IApartmentDetails, IOwner } from "@/types";
import { FaBed } from "react-icons/fa";
import { IoIosWifi, IoMdCar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { MdBathtub } from "react-icons/md";
import ApartmentDetailsItem from "./ApartmentDetailsItem";
import OwnerDetails from "./OwnerDetails";

interface ApartmentDetailsProps {
  details: IApartmentDetails;
  owner: IOwner;
}

const ApartmentDetails = ({ details, owner }: ApartmentDetailsProps) => {
  
  const renderDetails = () => {
    if (!details || !owner) return null;
    const { items } = details;
    const { name } = owner;
    const detailsMap = [
      {
        icon: <FaLocationDot size={30} color="#33eaff" />,
        text: items.address,
      },
      {
        icon: <TiHome size={30} color="#33eaff" />,
        text: items.type,
      },
      {
        icon: <FaBed size={30} color="#33eaff" />,
        text: `${items.roomsQuantity} ${
          items.roomsQuantity === 1 ? "habitación" : "habitaciones"
        }`,
      },
      {
        icon: <MdBathtub size={30} color="#33eaff" />,
        text: `${items.bathroomQuantity} ${
          items.bathroomQuantity === 1 ? "baño" : "baños"
        }`,
      },
    ];

    if (items.hasWifi) {
      detailsMap.push({
        icon: <IoIosWifi size={30} color="#33eaff" />,
        text: "WIFI",
      });
    }

    if (items.hasFreeParking) {
      detailsMap.push({
        icon: <IoMdCar size={30} color="#33eaff" />,
        text: "Estacionamiento gratuito",
      });
    }

    return (
      <>
        {detailsMap.map((detail, index) => (
          <ApartmentDetailsItem
            key={index}
            icon={detail.icon}
            text={detail.text}
          />
        ))}
        {details.description && (
          <div className="py-6 flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Descripción</h3>
            <p className="w-full lg:w-[75%]">{details.description}</p>
          </div>
        )}
        {name && <OwnerDetails name={name} />}
      </>
    );
  };

  return (
    <article className="apartmentDetails__container">{renderDetails()}</article>
  );
};

export default ApartmentDetails;
