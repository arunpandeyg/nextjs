
import ContactForm from '@/components/ContactForm';
import OwnerImage from '@/components/OwnerImage';


export default function Home() {
  return (
    <div className='w-full h-[448px] flex flex-col md:flex-row lg:flex-row mt-5 items-center justify-between bg-gray-800 text-white '>
       <OwnerImage />
       <ContactForm />
    </div>
  );
}
