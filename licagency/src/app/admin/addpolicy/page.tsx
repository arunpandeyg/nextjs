"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { toast } from "sonner";

const AddPolicyPage = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    category: "",
    description: "",
  });

  // for <input> and <textarea>
const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setData((prev) => ({ ...prev, [name]: value }));
  console.log("Updated:", { ...data, [name]: value });
};

// for <Select>
const onSelectChange = (value: string) => {
  setData((prev) => ({ ...prev, category: value }));
  console.log("Updated:", { ...data, category: value });
};

  // const onChangeHandler = (e: any) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setData((data) => ({ ...data, [name]: value }));
  //   console.log(data);
  // };

  const onSubmitHandler =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('title', data.title);
    formData.append('category', data.category);
    formData.append('description', data.description);
    formData.append('image', image);    
    const response = await axios.post('/api/policy', formData);
    if(response.data.success){
      toast.success('Policy added successfully');
      setImage(false);
      setData({
        title: "",
        category: "",
        description: "",
      });
    }else{
      toast.error('Failed to add policy');
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-[450px] sm:h-[400px] sm:pt-5 sm:pl-16 ">
        <Card className="p-4 ">
          <p className="text-xl font-bold">Upload Thumbnail</p>
          <label htmlFor="image">
            <Image
              src={!image ? "/upload.png" : URL.createObjectURL(image)}
              alt="logo"
              width={180}
              height={180}
              className="cursor-pointer rounded-lg"
            />
          </label>
          <Input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            className="hidden"
            required
          />
          <p className=" ">Policy Title</p>
          <Input
            onChange={onChangeHandler}
            name="title"
            value={data.title}
            type="text"
            placeholder="Enter Policy Title"
            className="p-2"
            required
          />
          <p className=" ">Policy Category</p>
          <Select onValueChange={onSelectChange} name="category" value="data.category" >
            <SelectTrigger className="">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="LIC">LIC</SelectItem>
              <SelectItem value="UIIC">UIIC</SelectItem>
              <SelectItem value="StarHealth">Star Health</SelectItem>
              <SelectItem value="MutualFunds">Mutual Funds</SelectItem>
            </SelectContent>
          </Select>
          <p className=" ">Policy Description</p>
          <Textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            placeholder="Enter Policy Description"
            rows={3}
            className="p-2  "
            required
          />
          <Button type="submit" className="text-center bg-orange-500 hover:bg-orange-700">
            Add Policy
          </Button>
        </Card>
      </form>
      <div></div>
    </>
  );
};

export default AddPolicyPage;
