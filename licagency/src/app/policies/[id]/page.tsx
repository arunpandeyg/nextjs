"use client";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { lic_data } from "@/data/LIC";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRunning, FaWhatsapp } from "react-icons/fa";


interface PolicyData {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
}

const Policies = ({ params }: { params: Promise<{ id: string }> }) => {
  const [data, setData] = useState<PolicyData | null>(null);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };
    fetchData();
  }, [params]);

  useEffect(() => {
    const fetchPolicies = async () => {
      const { id } = await params; // ✅ unwrap promise here
      const response = await axios.get("/api/policy", {
        params: { id },
      });

      setData({
        id: response.data.policy.id,
        image: response.data.policy.image,
        title: response.data.policy.title,
        category: response.data.policy.category,
        description: response.data.policy.description,
      });
    };

    fetchPolicies();
  }, [params]);

  if (!data) return <p>Loading...</p>;
 
  return data ? (
    <>
      <div className="bg-gray-300 py-5 px-5 md:px-12 lg:px-28">
        <div className="text-center my-8 ">
          <h1 className="text-2xl sm:text-4xl font-semibold max-w-[700px] mx-auto ">
            {data?.title}
          </h1>
          <Image
            src={data?.image}
            alt={data?.title}
            width={500}
            height={500}
            className="mx-auto mt-5 shadow-[-3px_3px_0px_0px_#000000]"
          />
          <div className="policy-details" dangerouslySetInnerHTML={{ __html: data?.description }}></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  ) : (
    <></>
  );
};

export default Policies;
