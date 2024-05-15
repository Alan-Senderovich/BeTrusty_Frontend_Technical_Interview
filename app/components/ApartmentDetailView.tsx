"use client";

import { useAppSelector } from "@/redux/hooks";
import {
  getSelectedApartmentState,
  getStatusState,
} from "@/redux/features/apartmentSlice";
import {
  ReservationCard,
  ApartmentDetails,
  Gallery,
  Carousel,
} from "@/components";
import { Button } from "@/components/common";
import { Spinner } from "@/components/common";
import { IApartmentDetails, IOwner } from "@/types";
import { FaPencilAlt } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";

const ApartmentDetailView = () => {
  const selectedApartment = useAppSelector(getSelectedApartmentState);
  const status = useAppSelector(getStatusState);
  const isLoading = status === "loading";

  const details = selectedApartment?.apartment.details;
  const owner = selectedApartment?.owner;
  const pricePerNight = selectedApartment?.apartment.pricePerNight;
  const images = selectedApartment?.apartment.images;
  const name = selectedApartment?.apartment.name;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <article className="apartmentView__container">
          <section className="apartmentView__headerSection">
            <p className="font-semibold text-xl">{selectedApartment && name}</p>
            <div className="flex-center gap-3">
              <div className="topIcons__container bg-secondary-blue hover:bg-primary-blue">
                <FaPencilAlt size={20} color="#33eaff" />
              </div>
              <div className="topIcons__container bg-light-blue hover:bg-secondary-blue">
                <RiShareForwardFill size={20} color="#0f172a" />
              </div>
            </div>
          </section>
          <section className="apartmentView__imagesSection">
            <div className="flex md:hidden">
              {images && <Carousel images={images} />}
            </div>
            {images && <Gallery images={images} />}
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
