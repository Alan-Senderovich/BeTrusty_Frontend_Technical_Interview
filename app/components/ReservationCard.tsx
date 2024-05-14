"use client";

import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { DatePickerForm } from "@/components/common";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getSelectedEndDateState,
  getSelectedStartDateState,
  updateValuePerNight,
} from "@/redux/features/apartmentSlice";
import { formatRangeDate } from "@/utils/dateFormat";

interface ReservationCardProps {
  pricePerNight: number | null | undefined;
}

const ReservationCard = ({ pricePerNight }: ReservationCardProps) => {
  const dispatch = useAppDispatch();
  const selectedStartDate = useAppSelector(getSelectedStartDateState);
  const selectedEndDate = useAppSelector(getSelectedEndDateState);
  const [isEditingPrice, setIsEditingPrice] = useState<boolean>(false);
  const [newPrice, setNewPrice] = useState<number>(pricePerNight ?? 0);
  const [reserverdDays, setReservedDays] = useState<number>(0);
  const totalIncome = newPrice * reserverdDays;

  console.log("startDate", selectedStartDate);
  console.log("EndDate", selectedEndDate);

  useEffect(() => {
    if (selectedEndDate && selectedStartDate) {
      const reservedDays = formatRangeDate(selectedStartDate, selectedEndDate)
      setReservedDays(reservedDays);
    }
  }, [selectedStartDate, selectedEndDate]);

  const handleEditPrice = () => {
    setIsEditingPrice(true);
  };

  const handleSavePrice = () => {
    setIsEditingPrice(false);
    dispatch(updateValuePerNight(newPrice));
  };

  const handleChange = (e: any) => {
    setNewPrice(e.target.value);
  };

  return (
    <article className="reservationCard__container">
      <div className="reservationCard__row flex-between">
        {isEditingPrice ? (
          <input
            type="number"
            value={newPrice}
            onChange={handleChange}
            autoFocus
            className="text-primary-blue"
          />
        ) : (
          <div className="flex-center flex-col py-4">
            <p className="text-xl font-semibold">${newPrice} USD por noche</p>
            <p>Precio por habitación</p>
          </div>
        )}
        <div>
          {isEditingPrice ? (
            <button onClick={handleSavePrice}>Guardar</button>
          ) : (
            <FaPencilAlt
              size={20}
              color="#33eaff"
              className="cursor-pointer text-red-500"
              onClick={handleEditPrice}
            />
          )}
        </div>
      </div>
      <div className="reservationCard__row">
        <DatePickerForm />
      </div>
      <div className="reservationCard__row flex-center">
        <p className="py-4">
          Cantidad de días:{" "}
          <span className="font-semibold">{reserverdDays}</span>
        </p>
      </div>
      <div className="reservationCard__row flex-center">
        <p className="py-4">
          Depósito reembolsable:{" "}
          <span className="font-semibold">${newPrice} USD</span>
        </p>
      </div>
      <div className="reservationCard__row flex-center">
        <p className="py-4">
          Ingreso total:{" "}
          <span className="font-semibold">{`$${totalIncome} USD`}</span>
        </p>
      </div>
    </article>
  );
};

export default ReservationCard;
