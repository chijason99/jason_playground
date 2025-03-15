import React from "react";
import { delay } from "../../../../lib/util";

export default async function LoadingUsers() {
    await delay(3000);

  return (
    <div className="h-60 flex-1 animate-pulse rounded-xl bg-yellow-800 p-10 text-white" />
  );
}