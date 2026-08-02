import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getAllUsers } from "@/server/users";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";
import DeleteUser from "./DeleteUser";
import AddUserForm from "./forms/AddUserForm";

const UsersTable = async () => {
  const users = await getAllUsers();

  return (
    <Table className="w-full ">
      <TableCaption>A list of your recent Users</TableCaption>
      <TableHeader>
        <TableRow className="text-white text-xl">
          <TableHead className="w-[100px] ">Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>CreatedAt</TableHead>
          <TableHead>UpdatedAt</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.createdAt?.toLocaleString()}</TableCell>
            <TableCell>{user.updatedAt?.toLocaleString()}</TableCell>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="size-4 ">
                  <Pencil />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-600 text-white">
                <DialogHeader>
                  <DialogTitle className="text-center font-bold">Edit User</DialogTitle>                  
                  <AddUserForm user={user} />
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Button>
              <DeleteUser userId={user.id} />
            </Button>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
