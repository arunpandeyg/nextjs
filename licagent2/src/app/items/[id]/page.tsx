// app/items/[id]/page.tsx
import ItemSelect from "@/components/ItemSelect";
import  items  from "@/data/lic";
import Image from "next/image";

type Props = {
  readonly params: Promise<{ id: string  }>; // ✅ mark as Promise
};

export default async function ItemDetails({ params }: Props) {
  const { id } = await params; // ✅ await params
  const item = items.find((i) => i.id === id);

  if (!item) {
    return <div className="p-10 text-red-500 text-xl">Item not found</div>;
  }

  return (
    <div className="w-full h-[468px] flex flex-col md:flex-row lg:flex-row pl-5   bg-gray-800 text-white ">
      <div className=" sticky  z-10">
        <ItemSelect />
      </div>
    <div className="max-w-2xl mx-auto p-6 h-[476px] text-white">
      
      <h1 className="text-3xl font-bold mb-4 text-center">{item.name}</h1>
      <div className="relative w-full h-64 mb-4">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <p className="text-lg text-white overflow-hidden">{item.description}</p>
    </div>
    </div>
  );
}


