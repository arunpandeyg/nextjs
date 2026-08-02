"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

type Profile = {
  id: number;
  name: string;
  avatar: string;
};

interface Props {
  profiles: Profile[];
}

export default function ProfileCarousel({ profiles }: Props) {
  return (
    <div className="w-full max-w-4xl mx-auto py-30">
      <Swiper spaceBetween={15} slidesPerView={3} 
      modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}>
        {profiles.map((profile) => (
          <SwiperSlide key={profile.id}>
            <Link href={`/profile/${profile.id}`}>
              <div className="cursor-pointer group">
                <div className="relative w-full h-78 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="mt-2 text-center font-medium">{profile.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Left Button */}
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
        <button className="swiper-button-prev bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
          ◀
        </button>
      </div>

      {/* Right Button */}
      <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
        <button className="swiper-button-next bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
          ▶
        </button>
      </div>
    </div>

  );
}
