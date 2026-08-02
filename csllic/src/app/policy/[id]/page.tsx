import React from 'react'
import Image from "next/image";
import Policies from "@/data/LIC";
import PolicyCarousel from '@/components/PolicyCarousel';
import Link from 'next/link';

const PolicyPage = ({ params }: { params: { id: string } }) => {
  const policyId = parseInt(params.id);
  const policy = Policies.find((p) => p.id === policyId);

    if (!policy) {
        return <div className='text-2xl font-bold text-gray-600'>Policy not found</div>;
    }

    // Suggest 5 others (excluding current)
  const suggestions = Policies.filter((p) => p.id !== policy.id).slice(0, 5);

  return (
    <div className="flex flex-col max-w-4xl mx-auto py-10">
      {/* Profile Details */}
      <div className="flex flex-col  items-center justify-center gap-6">
        <div className="relative w-100 h-53 overflow-hidden shadow-lg rounded-2xl">
          <Image src={policy.image} alt={policy.name} fill className="object-cover p-2 rounded-2xl" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{policy.name}</h1>
          <p className="mt-2 text-gray-600">{policy.description}</p>
          {/* <Link href={`/policy/${policy.id}`} className="mt-2 text-primary underline">Read more</Link> */}
        </div>
      </div>

      {/* Suggestions */}
      {/* <div className="h-40 ">
        <h2 className="text-xl font-semibold mt-4 mb-2">You may also like</h2>
        <PolicyCarousel policies={suggestions} />
      </div> */}
    </div>
  )
}

export default PolicyPage
