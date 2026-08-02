import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import axios from "axios";
import InfiniteScroll from "@/components/InfiniteScroll";


const Header = () => {
  const [email, setEmail] = React.useState("");

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success("Email added successfully");
      setEmail("");
    } else {
      toast.error("Failed to add email");
    }
  };
  return (
    <>
    <div>
      {/* <Navbar /> */}
      </div>
    <div className="py-5 px-5 md:px-12 lg:px-28 bg-gradient-to-b from-gray-400 to-gray-300">
      
      {/* <div className="flex flex-col sm:flex-row justify-between items-center ">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="cursor-pointer rounded-full"
          />
        </Link>
        <Link href="/contact" className="flex flex-col sm:flex-row items-center gap-2">
          <span>Arun Pandey👋</span> 9810013821{" "}
          <FaWhatsapp className="text-green-700 text-2xl" />
        </Link>
        <Button
          className="flex items-center gap-2 font-bold py-1 px-3 sm:px-6 border border-solid border-gray-600 rounded-lg bg-orange-500 hover:bg-orange-600 text-white   shadow-[-5px_5px_0px_0px_#00000]"
          variant={"default"}
        >
          Get Started <FaRunning />
        </Button>
      </div> */}
      <div className=" justify-between text-center my-8 ">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Welcome to{" "}
          <span className="text-orange-600 font-bold">Insure Invest</span>
        </h1>
        <div className="text-sm sm:text-lg mt-2">
          <InfiniteScroll />
          {/* Insurance, that financially secure you and your family round the clock... */}
          {/* Find the best insurance policies for your needs and save money! */}
        </div>
        <div className="flex flex-col sm:flex-row justify-around ">
          <form className=" ">
            <div className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-5 border border-solid border-gray-600 rounded-lg bg-gray-300  shadow-[-5px_5px_0px_0px_#00000]">
              <input
                className=" outline-none"
                type="text"
                placeholder="  Search for policies"
              />
              <Button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 rounded-lg"
              >
                Search
              </Button>
            </div>
          </form>
          <form onSubmit={onSubmitHandler}>
            <div className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-5 border border-solid border-gray-600 rounded-lg bg-gray-300  shadow-[-5px_5px_0px_0px_#00000]">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className=" outline-none"
                type="email"
                placeholder="  Enter your email"
              />
              <Button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 rounded-lg"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
