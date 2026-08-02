import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { lic_data } from "@/data/LIC";
import PolicyItem from "./PolicyItem";
import axios from "axios";

const PolicyList = () => {
  const [menu, setMenu] = React.useState("All");
  const [policies, setPolicies] = React.useState([]);

  const fetchPolicies = async () => {
    const response = await axios.get("/api/policy");
    setPolicies(response.data.policies);
    console.log(response.data.policies);
  };

  useEffect(() => {
    fetchPolicies();
  }, []);

  return (
    <div className=" bg-gradient-to-b from-gray-500 to-gray-300">
      <div className="flex flex-col w-30 mx-auto  sm:flex-row justify-center gap-6 py-10 ">
        <Button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? `bg-orange-600 hover:bg-orange-700 text-white py-1 px-4 rounded-sm`
              : ""
          }
        >
          All
        </Button>
        <Button
          onClick={() => setMenu("LIC Policy")}
          className={
            menu === "LIC Policy"
              ? `bg-orange-600 hover:bg-orange-700 text-white py-1 px-4 rounded-sm`
              : ""
          }
        >
          LIC Policy
        </Button>
        <Button
          onClick={() => setMenu("UIIC Policy")}
          className={
            menu === "UIIC Policy"
              ? `bg-orange-600 hover:bg-orange-700 text-white py-1 px-4 rounded-sm`
              : ""
          }
        >
          UIIC
        </Button>
        <Button
          onClick={() => setMenu("Star Health")}
          className={
            menu === "Star Health"
              ? `bg-orange-600 hover:bg-orange-700 text-white py-1 px-4 rounded-sm`
              : ""
          }
        >
          Star Health
        </Button>
        <Button
          onClick={() => setMenu("Mutual Funds")}
          className={
            menu === "Mutual Funds"
              ? `bg-orange-600 hover:bg-orange-700 text-white py-1 px-4 rounded-sm`
              : ""
          }
        >
          Mutual Funds
        </Button>
      </div>
      <div className="flex flex-wrap justify-around gap-2 hap-y-4 mb-8 xl:mx-24 ">
        {policies
          .filter((lic) => (menu === "All" ? true : lic.category === menu))
          .map((lic) => (
            <PolicyItem
              key={lic._id}
              id={lic._id}
              image={lic.image}
              category={lic.category}
              title={lic.title}
              description={lic.description}              
            />
          ))}
      </div>
    </div>
  );
};

export default PolicyList;
