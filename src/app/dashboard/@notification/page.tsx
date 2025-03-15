import { delay } from "../../../../lib/util";

export default async function Notification() {
    await delay(2000);
  
    return (
        <div className="h-96 flex-1 rounded-2xl bg-purple-800 p-10 text-white">
          <h2 className="text-xl font-semibold">Notifications</h2>
        </div>
      );
  }