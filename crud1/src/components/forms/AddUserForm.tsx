"use client";
import React, {useState} from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  age: z.string().min(0).max(100),
  email: z.string().email(),
  username: z.string().min(2).max(50),
});

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createUser, updateUser } from "@/server/users";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { User } from "@/db/schema";

interface AddUserFormProps {
  user?: User;
}

const AddUserForm = (props: AddUserFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const actionText = props.user ? 'Update' : 'Create';
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: props.user?.name ?? "",
      age: props.user?.age ?? "",
      email: props.user?.email ?? "",
      username: props.user?.username ?? "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try{
      const userData={
      ...values,
      password: '123456',
    }
    if(props.user){
      await updateUser({
        ...userData, 
        id: props.user.id});
      toast.success("User updated successfully");
      router.refresh();
      return
    }else{
      await createUser(userData);
      toast.success("User created successfully");
      router.refresh();
    }
    
    form.reset();
    toast.success(`User ${props.user ? 'updated' : 'created'} successfully`);
    router.refresh();
    setIsLoading(false);
    }catch(error){
      console.log(error);
      toast.error(`Failed to ${props.user ? 'update' : 'create'} user`);     
    }finally{
      setIsLoading(false);
    }
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" px-4 py-4 bg-gray-600 text-white rounded-lg ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input placeholder="Enter Age" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter Username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display username.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} className="bg-orange-600 hover:bg-orange-700 text-center" type="submit">{isLoading ? (
          <Loader2 className=" size-4 animate-spin"/> ): (
          `${actionText} User`
          )}
          </Button>
      </form>
    </Form>
  );
};

export default AddUserForm;
