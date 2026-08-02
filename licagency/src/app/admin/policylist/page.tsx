'use client';
import PolicyTableItems from '@/components/admin-components/PolicyTableItems';
import axios from 'axios';
import React from 'react'
import { toast } from 'sonner';


interface Policy {
  _id: string;
  image: string;
  title: string;
  category: string;
  description: { __html: string | TrustedHTML; };
  mongoId: string;
}

const PolicyListPage = () => {
  const [policies, setPolicies] = React.useState([]);

    const fetchPolicies = async () => {
      const response = await fetch("/api/policy");
      const data = await response.json();
      setPolicies(data.policies);
    };
 

  const deletePolicy = async (mongoId: string) => {
    const response = await axios.delete(`/api/policy/`, {
      params: { id: mongoId },
      method: "DELETE",
    });        
    toast.success("Policy deleted successfully");
    fetchPolicies();
  };

  React.useEffect(() => {    
    fetchPolicies();
  }, []);

  return (
    <div className='flex flex-col pt-2 px-5 sm:pt-5 sm:pl-10 bg-gray-600'>
      <h1 className='text-2xl font-bold pb-3 text-white'>All Policies</h1>
      <div className='relative h-[90vh] max-w-[870px] overflow-x-auto border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr className='flex justify-around bg-gray-600 text-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600'>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Policy Image
              </th>
              <th scope='col' className='px-6 py-3'>
                Title
              </th>
              <th scope='col' className='px-6 py-3'>
                Category
              </th>
              <th scope='col' className='px-6 py-3'>
                Description
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy: Policy) => (
              <PolicyTableItems key={policy._id} mongoId={policy._id} policy={policy} image={policy.image} title={policy.title} category={policy.category} description={policy.description} deletePolicy={deletePolicy}/>
            
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PolicyListPage
