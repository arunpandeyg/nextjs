"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";


interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }: CardProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative  flex justify-center items-center  h-[300px] w-[300px] object-cover rounded-lg overflow-hidden m-5 bg-gray-400 hover:scale-110 transition-transform duration-300 ease-in-out shadow-2xl "
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
              className="bg-white text-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[1.5ch] hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <Link href="/lic"><span >Explore Now</span></Link>
              <ArrowLeft className="h-4 w-4" />
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        src={image}
        alt="Carousel Image"
        draggable={false}
        fill
        style={{ objectFit: "cover" }}
        className=""
      />
    </motion.div>
  );
};

export default Card;
