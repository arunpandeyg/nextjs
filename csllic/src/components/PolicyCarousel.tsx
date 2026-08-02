"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

type Policy = {
  id: number;
  image: string;
  name: string;
  description: string;
};

interface PolicyCarouselProps {
  policies: Policy[];
}

const PolicyCarousel = ({ policies }: PolicyCarouselProps) => {
  return (
    <div className="w-full max-w-4xl hidden md:block mx-auto pt-25 relative">
      <Swiper
        className=""
        spaceBetween={15}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {policies.map((policy, id) => (
          <SwiperSlide key={id}>
            <Link href={`/${policy.id}`}>
              <div className="cursor-pointer group">
                <div className="relative w-full h-70 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={policy.image}
                    alt={policy.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <p className="mt-2 text-center font-medium">{policy.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div>
          {/* Left Button */}
          <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
            <Button className="swiper-button-prev bg-white p-2 rounded-full shadow hover:bg-orange-500 transition">
              ◀
            </Button>
          </div>

          {/* Right Button */}
          <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
            <Button className="swiper-button-next bg-white p-2 rounded-full shadow hover:bg-orange-500 transition">
              ▶
            </Button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default PolicyCarousel;
