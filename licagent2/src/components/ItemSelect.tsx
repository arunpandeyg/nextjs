// app/components/ItemSelect.tsx
"use client";

import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import  items  from "@/data/lic";

export default function ItemSelect() {
  const router = useRouter();

  return (
    <div className="max-w-sm mx-auto mt-10">
      <Select
        onValueChange={(value) => {
          router.push(`/items/${value}`);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Policy" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
