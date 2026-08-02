// FILE: components/CarouselCard.tsx
// -----------------------------
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  product: { _id: string; name: string; description: string; image: string };
};

export default function CarouselCard({ product }: Props) {
  const shortDesc =
    product.description.length > 100
      ? product.description.slice(0, 100).trimEnd() + "..."
      : product.description;

  return (
    <article className="w-full h-full flex flex-col gap-2">
      <div className="flex-1 rounded-xl overflow-hidden shadow-sm bg-gray-50">
        <Image
          width={500}
          height={500}
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-48 object-cover md:h-56 lg:h-64"
        />
      </div>

      <div className="px-2">
        <h3
          className="text-sm md:text-base font-semibold truncate"
          title={product.name}
        >
          {product.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 mt-1">{shortDesc}</p>
        <div className="mt-2">
          <Link
            href={`/product/${product._id}`}
            className="text-primary-600 text-sm underline"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}
