// app/items/[id]/page.tsx
import { items } from "@/data/lic";
import Image from "next/image";

type Props = {
  readonly params: Promise<{ id: string }>; // ✅ mark as Promise
};

export default async function ItemDetails({ params }: Props) {
  const { id } = await params; // ✅ await params
  const item = items.find((i) => i.id === id);

  if (!item) {
    return <div className="p-10 text-red-500 text-xl">Item not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
      <div className="relative w-full h-64 mb-4">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <p className="text-lg text-gray-700">{item.description}</p>
    </div>
  );
}
