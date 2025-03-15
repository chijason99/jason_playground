import { delay } from "../../../lib/util";

export default async function Dashboard() {
  await delay(1000);

  return (
    <div>
      <h1 className="text-3xl font-bold">Default mainpage</h1>
    </div>
  );
}