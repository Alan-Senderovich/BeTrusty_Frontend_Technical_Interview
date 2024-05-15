"use client";

import Image from "next/image";
import { useState } from "react";
import { RoomsDetails, Carousel } from "@/components";
import { Button, Modal } from "@/components/common";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "@/constants";

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  if (!images || images.length === 0) return null;
  const displayedPhotos = images?.slice(0, 4);
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


  return (
    <div className="hidden grid-cols-4 grid-rows-2 gap-4 relative md:grid">
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

      <div
        onClick={onOpenRoomsDetailsModal}
        data-testid="view-rooms-details"
        className="viewRoomsDetail__container"
      >
        <p>Ver los detalles de las habitaciones</p>
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

      <div className="showAllPhotos__container">
        <Button
          variant="secondary"
          handleClick={onOpenViewAllPhotosModal}
          data-testid="view-all-images"
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
        {images && <Carousel images={images} />}
      </Modal>

      {/* Rooms Details Modal */}
      <Modal
        isOpen={isRoomsDetailsModalOpen}
        onClose={onCloseRoomsDetailsModal}
      >
        <RoomsDetails />
      </Modal>
    </div>
  );
};

export default Gallery;
