// FILE: app/product/[id]/page.tsx
// -----------------------------
import connectToMongo from "@/lib/mongodb";
import Product from "@/models/Product";
import Image from "next/image";

type Props = { params: { id: string } };

export default async function ProductPage({ params }: Props) {
  await connectToMongo();
  const product = await Product.findById(params.id).lean();
  if (!product) return <div className="p-8">Product not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="rounded-lg overflow-hidden shadow">
        {/* Using next/image is recommended if image domain is configured in next.config.js */}
        <Image
          src={product.image}
          width={500}
          height={500}
          alt={product.name}
          className="w-full h-96 object-cover"
        />
      </div>

      <h1 className="mt-6 text-2xl font-bold">{product.name}</h1>
      <p className="mt-4 text-gray-700 whitespace-pre-line">
        {product.description}
      </p>
    </div>
  );
}
