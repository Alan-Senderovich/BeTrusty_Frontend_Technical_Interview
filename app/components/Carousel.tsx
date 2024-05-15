"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  if (!images || images.length === 0) return null;

  const prev = () =>
    setCurrentIndex((curr) => (images && curr === 0 ? images.length - 1 : curr - 1));

  const next = () =>
    setCurrentIndex((curr) => (images && curr === images.length - 1 ? 0 : curr + 1));

  return (
    <article
      className="flex relative overflow-hidden"
      data-testid="carousel-container"
    >
      <div
        className="flex w-full transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images &&
          images.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt={`${image} ${i}`}
              width={400}
              height={300}
              className="min-w-full w-full object-cover"
            />
          ))}
      </div>
      <div className="flex-between absolute inset-0 px-4">
        <button onClick={prev} aria-label="Imagen Anterior">
          <FaRegArrowAltCircleLeft
            color="white"
            size={40}
            className="bg-black/50 rounded-full hover:bg-black/5"
          />
        </button>
        <button onClick={next} aria-label="Siguiente Imagen">
          <FaRegArrowAltCircleRight
            color="white"
            size={40}
            className="bg-black/50 rounded-full hover:bg-black/5"
          />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex-center gap-2">
          {images &&
            images.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-white rounded-full ${
                  currentIndex === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
        </div>
      </div>
    </article>
  );
};

export default Carousel;
