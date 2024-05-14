"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FaPencilAlt } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import {
  ReservationCard,
  ApartmentDetails,
  Gallery,
  Carousel,
} from "@/components";
import { Button } from "@/components/common";
import { IApartmentDetails, IOwner } from "@/types";
import {
  getSelectedApartmentState,
  getStatusState,
} from "@/redux/features/apartmentSlice";
import { useEffect } from "react";
import { fetchApartmentData } from "@/redux/services";

const ApartmentDetailView = () => {
  const dispatch = useAppDispatch();
  const selectedApartment = useAppSelector(getSelectedApartmentState);
  const status = useAppSelector(getStatusState);
  const isLoading = status === "loading";
  const id = "1";

  console.log("selectedddddddd", selectedApartment);

  useEffect(() => {
    dispatch(fetchApartmentData(id));
  }, [id, dispatch]);

  const details = selectedApartment?.apartment.details;
  const owner = selectedApartment?.owner;
  const pricePerNight = selectedApartment?.apartment.pricePerNight;
  const images = selectedApartment?.apartment.images;
  const name = selectedApartment?.apartment.name;

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <article className="apartmentView__container">
          <section className="apartmentView__headerSection">
            <h3>{selectedApartment && name}</h3>
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
            <div className="flex md:hidden">
              <Carousel images={selectedApartment && images} />
            </div>
            <Gallery images={selectedApartment && images} />
          </section>
          <section className="apartmentView__detailsSection">
            <div className="apartmentView__reservation-wrapper">
              <ReservationCard
                pricePerNight={selectedApartment && pricePerNight}
              />
              <Button variant="default">Invitar inquilino</Button>
            </div>
            <ApartmentDetails
              details={(selectedApartment && details) as IApartmentDetails}
              owner={(selectedApartment && owner) as IOwner}
            />
          </section>
        </article>
      )}
    </>
  );
};

export default ApartmentDetailView;
