
import { getUsers } from "../../server/users";

export default async function Home() {
  const users = await getUsers()
  return (
    <div className="">
      <h1>Users</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
         
    </div>
  );
}
