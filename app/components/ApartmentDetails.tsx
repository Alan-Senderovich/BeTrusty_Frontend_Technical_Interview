import { IApartmentDetails, ApartmentDetailsData, IOwner } from "@/types";
import Image from "next/image";
import { FaBed } from "react-icons/fa";
import { ApartmentDetailsItem } from "@/components";
import { FaLocationDot } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { MdBathtub } from "react-icons/md";
import { IoIosWifi, IoMdCar } from "react-icons/io";
interface ApartmentDetailsProps {
  details: IApartmentDetails;
  owner: IOwner;
}

const ApartmentDetails = ({ details, owner }: ApartmentDetailsProps) => {
  const renderDetails = () => {
    if (!details || !owner) return null;
    const { items, description } = details;
    const {name} = owner;
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

    // return detailsMap.map((detail, index) => (
    //   <ApartmentDetailsItem key={index}>
    //     {detail.icon}
    //     <p>{detail.text}</p>
    //   </ApartmentDetailsItem>
    // ));

    return (
      <>
        {detailsMap.map((detail, index) => (
          <ApartmentDetailsItem key={index}>
            {detail.icon}
            <p>{detail.text}</p>
          </ApartmentDetailsItem>
        ))}
        {details.description && (
          <div className="py-6 flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Descripción</h3>
            <p className="w-full lg:w-[75%]">{details.description}</p>
          </div>
        )}
        {name && (
          <div className="py-6 flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Propietario</h3>
            <div className="flex items-center gap-4">
              <div className="rounded-full overflow-hidden h-auto w-auto">
                <Image
                  alt="avatar"
                  src="/profile.webp"
                  width={50}
                  height={50}
                />
              </div>
              <p className="w-full lg:w-[75%]">{name}</p>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <article className="apartmentDetails__container">
      {renderDetails()}
      {/* {details.description && (
        <div className="py-6 flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Descripción</h3>
          <p className="w-full lg:w-[75%]">{details.description}</p>
        </div>
      )} */}
      {/* {owner.name && (
        <div className="py-6 flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Propietario</h3>
          <div className="flex items-center gap-4">
            <div className="rounded-full overflow-hidden h-auto w-auto">
              <Image alt="avatar" src="/profile.webp" width={50} height={50} />
            </div>
            <p className="w-full lg:w-[75%]">{owner.name}</p>
          </div>
        </div>
      )} */}
    </article>
  );
};

export default ApartmentDetails;
