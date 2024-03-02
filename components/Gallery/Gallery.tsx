"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TouristImageData } from "@/lib/TouristImageData";
import Image from "next/image";
import { useState } from "react";
import FullscreenButton from "../About/FullscreenButton";
import { RxCross2 } from "react-icons/rx";
import { useGlobalContext } from "./Photogalleries";

interface Props {
  initIndex: number;
}

function Gallery({initIndex} : Props) {
  const { openIndex, setOpenIndex } = useGlobalContext();
  const [currentSlide, setCurrentSlide] = useState<number>(initIndex);
  const totalImages = TouristImageData.image.length;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
    customPaging: (i: number) => (
      <div className="w-10 text-white">{/* Empty div for dot */}</div>
    ),
    initialSlide: initIndex,
  };
  return (
    <section className="flex fixed inset-0 w-screen h-screen bg-black/80 z-50">
      <div className="mx-auto  w-full ">
        <div className="w-full flex justify-end items-center gap-1 pr-10 p-2">
          <FullscreenButton />
          <button onClick={() => setOpenIndex(!openIndex)} className="text-white cursor-pointer p-4">
            <RxCross2 className=" text-2xl" />
          </button>
        </div>
        <Slider
          {...settings}
          className="mt-[50%] sm:mt-[15%] lg:mt-[7.5%] xl:mt-[2%] mx-auto w-10/12"
        >
          {TouristImageData.image.map((image, index) => (
            <div key={index}>
              <div className="flex items-center justify-center relative image_gallery m-auto overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover  h-full w-full rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="mx-auto z-50 flex justify-center">
          <div className="block text-white">
            {currentSlide + 1}/{totalImages}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;