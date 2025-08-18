'use client'
import React from "react";
import Slider from "react-slick";
import { sliderData } from "@/data/static/staticData";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
        <Slider {...settings}>
      {
          sliderData.map((item, index)=>(
            <div key={index} className="relative z-0 w-full">
              <img src={item.img} alt="" className="w-[100%] h-[150px] md:h-[250px] lg:h-[330px] xl:h-[420px] object-cover "/>
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-100 flex flex-col justify-center items-center text-white">
                <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">{item.name}</p>
                <p >{item.description}</p>
              </div>
            </div>
          ))
        }
    </Slider>
    </div>
  );
};

export default BannerSlider;
