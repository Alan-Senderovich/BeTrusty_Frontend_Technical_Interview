"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

interface CarouselProps {
  images: string[] | null | undefined;
}

const Carousel = ({ images }: CarouselProps) => {
  const [curr, setCurr] = useState<number>(0);

  const prev = () =>
    setCurr((curr) => (images && curr === 0 ? images.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (images && curr === images.length - 1 ? 0 : curr + 1));

  return (
    <article className="flex relative overflow-hidden" data-testid="carousel-container">
      <div
        className="flex w-full transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
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
      <div className="flex absolute inset-0 items-center justify-between px-4">
        <button onClick={prev}>
          <FaRegArrowAltCircleLeft
            color="white"
            size={40}
            className="bg-black/50 rounded-full hover:bg-black/5"
          />
        </button>
        <button onClick={next}>
          <FaRegArrowAltCircleRight
            color="white"
            size={40}
            className="bg-black/50 rounded-full hover:bg-black/5"
          />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images &&
            images.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-white rounded-full ${
                  curr === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
        </div>
      </div>
    </article>
  );
};

export default Carousel;
