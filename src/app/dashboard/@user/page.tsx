import { delay } from "../../../../lib/util";

export default async function Users() {
    await delay(1000);
  
    return (
      <div className="h-60 rounded-xl bg-yellow-800 p-10 text-white">
        <h1 className="text-3xl font-bold">Users</h1>
      </div>
    );
  }