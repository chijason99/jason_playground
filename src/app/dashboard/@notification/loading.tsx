import { delay } from "../../../../lib/util";

export default async function LoadingNotifications() {
    await delay(5000);

    return (
      <div className="flex h-96 flex-1 animate-pulse items-center justify-center rounded-2xl bg-purple-800 p-10 text-white" />
    );
  }