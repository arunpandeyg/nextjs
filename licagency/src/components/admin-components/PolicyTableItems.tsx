import Image from "next/image";
import React from "react";

interface Policy {
  _id: string;
  image: string;
  title: string;
  category: string;
  description: { __html: string | TrustedHTML; };
  mongoId: string; 
  // add more properties as needed
}

const PolicyTableItems = ({
  policy,
  image,
  title,
  category,
  description,
  deletePolicy,
  mongoId,
}: {
  policy: Policy;
  image: string;
  title: string;
  category: string;
  description: any;
  deletePolicy: any;
  mongoId: string;
}) => {
  return (
    <tr className="flex justify-around bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className=" gap-3 hidden sm:flex px-2 py-2 font-medium whitespace-nowrap dark:text-white bg-gray-600 text-white"
      >
        <Image
          src={image ? policy.image : "/logo.png"}
          alt="logo"
          width={10}
          height={10}
          className="cursor-pointer rounded-full w-10 h-10 object-cover "
        />
      </th>
      <td className="px-6 py-4 bg-gray-600 text-white">{title ? policy.title : "No Title"}</td>
      <td className="px-6 py-4 bg-gray-600 text-white">
        {category ? policy.category : "No Category"}
      </td>
      <td className="px-6 py-4 bg-gray-600 text-white">
        {description.slice(0, 50)}
                  {/* or */}
                  {
                    description.slice(
                      0,
                      50
                    ) as React.HTMLProps<"p">["dangerouslySetInnerHTML"]
                  }
      </td>      
      <td
        onClick={() => deletePolicy(mongoId)}
        className="px-6 py-4 cursor-pointer bg-gray-600 text-white"
      >
        X
      </td>
    </tr>
  );
};

export default PolicyTableItems;
