import { FaPencilAlt } from "react-icons/fa";

const ReservationCard = () => {
  return (
    <article className="reservationCard__container">
      <div className="reservationCard__row flex-between">
        <div className="flex-center flex-col">
          <p className="text-xl font-semibold">$60 USD por noche</p>
          <p>Precio por habitación</p>
        </div>
        <div>
          <FaPencilAlt
            size={20}
            color="#33eaff"
            className="cursor-pointer text-red-500"
          />
        </div>
      </div>
      <div className="reservationCard__row">
        <div className="w-[50%] flex-col text-center pr-6 cursor-pointer">
          <p className="font-semibold">CHECK-IN</p>
          <p>dd/mm/aaaa</p>
        </div>
        <div className="w-[1px] bg-gray"></div>
        <div className="w-[50%] flex-col text-center pl-6 cursor-pointer">
          <p className="font-semibold">CHECK-OUT</p>
          <p>dd/mm/aaaa</p>
        </div>
      </div>
      <div className="reservationCard__row flex-center">
        <p className="py-4">
          Cantidad de días: <span className="font-semibold">0</span>
        </p>
      </div>
      <div className="reservationCard__row flex-center">
        <p className="py-4">
          Depósito reembolsable: <span className="font-semibold">$60 USD</span>
        </p>
      </div>
      <div className="reservationCard__row flex-center">
        <p className="py-4">
          Ingreso total: <span className="font-semibold">$0 USD</span>
        </p>
      </div>
    </article>
  );
};

export default ReservationCard;
