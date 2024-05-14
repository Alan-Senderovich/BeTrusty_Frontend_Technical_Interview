"use client";

import Image from "next/image";
import React, { useState } from "react";
import Modal from "./common/Modal";
import { Button } from "./common";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Carousel from "./Carousel";

interface GalleryProps {
  images: string[] | null | undefined;
}

const IMAGE_WIDTH = 400;
const IMAGE_HEIGHT = 300;


const Gallery = ({ images }: GalleryProps) => {
  const [isRoomsDetailsModalOpen, setIsRoomsDetailsModalOpen] =
    useState<boolean>(false);
  const [isViewAllPhotosModalOpen, setIsViewAllPhotosModalOpen] =
    useState<boolean>(false);

  const onOpenRoomsDetailsModal = () => {
    setIsRoomsDetailsModalOpen(true);
  };

  const onCloseRoomsDetailsModal = () => {
    setIsRoomsDetailsModalOpen(false);
  };

  const onOpenViewAllPhotosModal = () => {
    setIsViewAllPhotosModalOpen(true);
  };

  const onCloseViewAllPhotosModal = () => {
    setIsViewAllPhotosModalOpen(false);
  };

  const displayedPhotos = images?.slice(0, 4);

  return (
    <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 relative">
      {/* Foto principal */}
      <div className="col-span-2 row-span-2">
        <Image
          src={displayedPhotos ? displayedPhotos[0] : ""}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt="Main-Photo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cuadrado azul con texto */}
      <div
        onClick={onOpenRoomsDetailsModal}
        className="col-span-1 col-start-4 row-span-1 bg-primary-blue-100 flex items-center justify-center cursor-pointer hover:bg-secondary-blue transition ease-in-out duration-300"
      >
        <p className="text-white md:text-sm lg:text-base text-center">Ver los detalles de las habitaciones</p>
      </div>

      <div className="col-span-1 col-start-3 row-start-1 row-span-1">
        <Image
          src={displayedPhotos ? displayedPhotos[1] : ""}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt={`Photo ${displayedPhotos && displayedPhotos[1] + 2}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Resto de las fotos */}
      {displayedPhotos &&
        displayedPhotos.slice(2).map((photo, index) => (
          <div key={index} className="col-span-1 row-span-1">
            <Image
              src={photo}
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              alt={`Photo ${index + 2}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

      <div className="absolute bottom-0 right-0 md:max-w-[135px] lg:max-w-full md:mr-2 md:mb-2 lg:mr-3 lg:mb-3 xl:mr-4 xl:mb-4 md:text-xs xl:text-base">
        <Button
          className=""
          variant="secondary"
          handleClick={onOpenViewAllPhotosModal}
        >
          <div className="flex gap-2 items-center">
            <BsFillGrid3X3GapFill />
            <p>Mostrar todas las fotos</p>
          </div>
        </Button>
      </div>

      {/* View All Photos Modal */}
      <Modal
        isOpen={isViewAllPhotosModalOpen}
        onClose={onCloseViewAllPhotosModal}
      >
        <Carousel images={images} />
      </Modal>

      {/* Rooms Details Modal */}
      <Modal
        isOpen={isRoomsDetailsModalOpen}
        onClose={onCloseRoomsDetailsModal}
      >
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Detalles de las habitaciones</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrs standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
