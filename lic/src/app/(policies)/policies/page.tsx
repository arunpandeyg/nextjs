"use client"
import useMeasure from "react-use-measure";
import Card from "@/components/Card";
import {animate, motion, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react";



const PoliciesPage = () => {
  const images = [
    "/v1.png",
    "/v2.png",
    "/v3.png",
    "/v4.png",
    "/v5.png",
    "/v6.png",
    "/v7.png",
    "/v8.png",
    "/v9.png",
  ];

  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const [duration, setDuration] = useState(FAST_DURATION);

  const [ref, {width}] = useMeasure();

  const xTranslation  = useMotionValue(0)

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    const finalPosition = -width/2 - 9;

    if(mustFinish){
       controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
         ease: "linear",
         duration: duration * (1 - xTranslation.get() / (finalPosition) * duration),
         onComplete: () => {
           setMustFinish(false);
           setRerender(!rerender);
         }
       });
    }else{
       const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    }

   
    return controls ? controls.stop : undefined;
  }, [xTranslation, width, duration, rerender, mustFinish]);

  return (

    <main className="w-full h-[464px] py-20 bg-gray-600 ">
      <motion.div className="absolute left-0 gap-5 top-1/2 transform -translate-y-1/2 flex items-center justify-center overflow-hidden" ref={ref} style={{x: xTranslation}}
      onHoverStart={() => {setMustFinish(true); setDuration(SLOW_DURATION)}}
      onHoverEnd={() => {setMustFinish(true); setDuration(FAST_DURATION)}}
      >
     {
      [...images, ...images].map((item, index) => (
        <Card image={item} key={`${item}-${index}`} />

      ))

     }
    </motion.div>
      
    </main>
    
  );
}

export default PoliciesPage
