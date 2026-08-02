import { Button } from "@/components/ui/button";
import UsersTable from "@/components/UsersTable";
import { getAllUsers } from "@/server/users";
import { UserPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddUserForm from "@/components/forms/AddUserForm";

export default async function Home() {
  const users = await getAllUsers(); // always an array now

  return (
    <div className="w-full h-[590px] flex flex-col gap-4 max-w-7xl mx-auto p-4 md:p-24 bg-gray-700 ">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">
        All Users
      </h1>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <pre className="p-4 text-white bg-gray-600 rounded-lg overflow-x-auto whitespace-pre-wrap">
          <div className="flex justify-end ">
            <Dialog >
              <DialogTrigger asChild>
                <Button className="font-bold bg-orange-500 hover:bg-orange-700mb-3">
                 <UserPlus />
                  Add User
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-600 text-white">
                <DialogHeader>
                  <DialogTitle className="text-center">Add User</DialogTitle>
                  <DialogDescription className="text-center">
                    Add A New User to Database
                  </DialogDescription>
                  <AddUserForm />
                </DialogHeader>
              </DialogContent>
            </Dialog>
            
          </div>

          <UsersTable />
        </pre>
      )}
    </div>
  );
}

