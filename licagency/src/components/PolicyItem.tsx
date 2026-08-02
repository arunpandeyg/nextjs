import { lic_data } from "@/data/LIC";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const PolicyItem = ({ id, image, category, title, description }) => {
  return (
    <div className="max-w-[330px] text-white bg-gray-600 border border-gray-700 rounded-lg hover:shadow-[-7_7px_0px_0px_#00000]">
      <Link href={`/policies/${id}`}>
        <Image
          src={image}
          alt="logo"
          width={330}
          height={330}
          className="rounded-t-lg border border-gray-700"
        />
      </Link>

      <div className="p-5 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="inline-block  text-lg font-bold">{category}</p>
          <h5 className="text-lg font-bold tracking-tight">{title}</h5>
        </div>
        <p className="text-sm tracking-tight mb-3">
          {description.slice(0, 100)}
          {/* or */}
          {
            description.slice(
              0,
              100
            ) as React.HTMLProps<"p">["dangerouslySetInnerHTML"]
          }
        </p>
        {/* <p className="text-sm tracking-tight mb-3">
          dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }}
        </p> */}
        <Link
          className="inline-flex mx-auto py-2 font-semibold items-center justify-center"
          href={`/policies/${id}`}
        >
          Read More <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default PolicyItem;
