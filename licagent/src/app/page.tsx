import ContactForm from "@/components/ContactForm";
import OwnerImage from "@/components/OwnerImage";

export default function Home() {
  return (
    <div className="w-full h-[482px] flex flex-col md:flex-row lg:flex-row  items-center justify-between bg-gray-800 text-white ">
      <OwnerImage />
      <ContactForm />
    </div>
  );
}
