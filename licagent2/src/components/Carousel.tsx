"use client";
import React from "react";
import { motion } from "motion/react";
import  items  from "@/data/lic";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

const Carousel = () => {
  return (
    <div className="">
      <h1 className="text-white text-center pt-">LIC Policies</h1>
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 flex-cols-1 md:flex-cols-3 lg:flex-cols-4 gap-10 pl-10"
        >
          {items.map((item, index) => (
            <Card
              key={item.id}
              className="bg-gray-700 w-[400px] h-[300px] text-white mx-auto mt-5"
            >
              <CardHeader>
                <CardTitle className="text-white mx-auto">
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white mx-auto overflow-hidden">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.name}
                  className="mx-auto"
                />
                <CardDescription className="text-white mt-5">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <CardAction className="text-white mx-auto">
                  {/* <Link href={item.url}>View Policy</Link> */}
                </CardAction>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 flex-cols-1 md:flex-cols-3 lg:flex-cols-4 gap-10"
        >
          {items.map((item, index) => (
            <Card
              key={item.id}
              className="bg-gray-700 w-[400px] h-[370px] text-white mx-auto mt-5"
            >
              <CardHeader>
                <CardTitle className="text-white mx-auto">
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white mx-auto overflow-hidden">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.name}
                  className="mx-auto"
                />
                <CardDescription className="text-white mt-5">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <CardAction className="text-white mx-auto">
                  {/* <Link href={item.url}>View Policy</Link> */}
                </CardAction>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
