// FILE: components/EmblaCarousel.tsx
"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import CarouselCard from "./CarouselCard";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  _id: string;
  name: string;
  description: string;
  image: string;
};

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [slides, setSlides] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const limit = 8; // fetch 8 per batch
  const isFetchingRef = useRef(false);

  // autoplay
  const autoplayRef = useRef<number | null>(null);
  const autoplayDelay = 3500;

  const fetchProducts = useCallback(async (nextSkip = 0) => {
    if (isFetchingRef.current) return;
    isFetchingRef.current = true;

    try {
      const res = await axios.get(
        `/api/products?skip=${nextSkip}&limit=${limit}`
      );
      const newProducts: Product[] = res.data.products || [];
      if (newProducts.length) {
        setSlides((s) => [...s, ...newProducts]);
        setSkip(nextSkip + newProducts.length);
      }
    } catch (err) {
      console.error("Fetch products failed", err);
    } finally {
      isFetchingRef.current = false;
    }
  }, []);

  // initial fetch
  useEffect(() => {
    fetchProducts(0);
  }, [fetchProducts]);

  // when embla reaches near the end, load more
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selected = emblaApi?.selectedScrollSnap() ?? 0;
      const slidesCount = emblaApi?.scrollSnapList().length ?? 0;

      // if within last 3 slides, fetch more
      if (slidesCount - selected <= 4) {
        fetchProducts(skip);
      }
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi?.off("select", onSelect);
    };
  }, [emblaApi, fetchProducts, skip]);

  // autoplay helpers
  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = window.setInterval(() => {
      if (!emblaApi) return;
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, autoplayDelay);
  }, [emblaApi, stopAutoplay]);

  useEffect(() => {
    if (emblaApi && slides.length) startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi, slides.length, startAutoplay, stopAutoplay]);

  // pause on hover
  const rootRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const onEnter = () => stopAutoplay();
    const onLeave = () => startAutoplay();

    node.addEventListener("mouseenter", onEnter);
    node.addEventListener("mouseleave", onLeave);

    return () => {
      node.removeEventListener("mouseenter", onEnter);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, [startAutoplay, stopAutoplay]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div ref={rootRef} className="relative group">
      {/* Embla viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 py-4 px-2">
          {slides.map((p) => (
            <div
              key={p._id}
              className="min-w-[230px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[340px]"
            >
              <CarouselCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Left / Right controls */}
      <button
        aria-label="Previous"
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 shadow-md hidden group-hover:block"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        aria-label="Next"
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 shadow-md hidden group-hover:block"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
