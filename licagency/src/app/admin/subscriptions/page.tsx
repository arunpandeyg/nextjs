"use client";
import SubsTableItem from "@/components/admin-components/SubsTableItem";
import axios from "axios";
import React from "react";
import { toast } from "sonner";


interface Email {
  _id: string;
  email: string;
  createdAt: Date; // add this line
}

const SubscriptionPage = () => {
  const [emails, setEmails] = React.useState([]);

  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  const deleteEmail = async (mongoId: string) => {
    const response = await axios.delete(`/api/email/`, {
      params: { id: mongoId },
      method: "DELETE",
    });
    if (response.data.success) {
      toast.success("Email deleted successfully");
      fetchEmails();
    } else {
      toast.error("Failed to delete email");
    }
  };

  React.useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex1 pt-5 px-5 sm:pt-5 sm:pl-10 bg-gradient-to-b from-gray-500 to-gray-400">
      <h1 className="text-2xl font-bold pb-3 text-center justify-center text-white">
        Subscriptions
      </h1>
      <div className="relative h-[90vh] max-w-[560px] overflow-x-auto border border-gray-400 scrollbar-hide mt-3">
        <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className=" text text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="flex bg-gray-600 text-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600">
              {/* <th scope='col' className='px-6 py-3'>
                Name
              </th> */}
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3  ">
                Date
              </th>
              {/* <th scope='col' className='px-6 py-3'>
                Plan
              </th> */}
              {/* <th scope='col' className='px-6 py-3'>
                Status
              </th> */}
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            {emails.map((item: Email) => {
              return (
                <SubsTableItem
                  key={item._id}
                  mongoId={item._id}
                  deleteEmail={deleteEmail}
                  email={item.email}
                  date={item.createdAt}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionPage;
