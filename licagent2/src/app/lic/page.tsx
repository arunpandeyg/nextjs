import React from "react";
import Carousel from "@/components/Carousel";
import ItemSelect from "@/components/ItemSelect";

const LICPolicy = () => {
  return (
    <div className="w-full h-[475px] justify-between items-center pb-3 bg-gray-800 text-white ">
      <div className=" flex sticky z-10">
        <ItemSelect />
      </div>
      <br />
      <div className="container my-gradient mx-auto bg-gray-800 w-full h-[365px] text-white overflow-x-hidden">
        <Carousel />
      </div>

      {/* <div className="grid md:grid-cols-1 xl:grid-cols-2 mx-auto">
        {policies.map((policy, id) => (
          <Card
            key={policy.id}
            className="mx-auto mb-5 w-1/2 h-[406px] flex md:flex-col xl:flex-row  items-center justify-center bg-gray-800 text-white gap-15"
          >
            <div>
              <p className="text-2xl font-bold ml-5">{policy.name}</p>
            </div>
            <div>
              <Image
                src={policy.image}
                alt="Description"
                width={200}
                height={200}
                className="rounded-lg ml-5 drop-shadow-lg select-none pointer-events-none"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold ml-5">
                {policy.description}
              </h3>
            </div>
          </Card>
        ))}
      </div> */}
    </div>
  );
};

export default LICPolicy;
