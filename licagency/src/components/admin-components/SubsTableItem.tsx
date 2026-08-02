import React from "react";

type SubsTableItemProps = {
  email: string;
  mongoId: string;
  deleteEmail: (mongoId: string) => void;
  date: string;
};

const SubsTableItem: React.FC<SubsTableItemProps> = ({ 
  email,mongoId, 
  deleteEmail, date, }) => {
  const emailDate = new Date(date);
  return (
    <tr className="w-[560px] text-left text-white">
        {/* <td className="px-6 py-4 ">{email.name}</td> */}
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
         {email || "No email"}        
      </th>
      <td className="px-6 py-4 hidden sm:block mt-2">{emailDate.toDateString()}</td>
      <td className="px-6 py-4 text-1xl font-bold cursor-pointer pt-5" onClick={() => deleteEmail(mongoId)}>X</td>
    </tr>
  );
};

export default SubsTableItem;
