import { dbHealthCheck } from "~/models/healthcheck.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  let healthCheck = await dbHealthCheck();
  if (!healthCheck) return json({ dbStatus: "down" });
  return json({ dbStatus: healthCheck.message });
};

export default function Index() {
  let data = useLoaderData<typeof loader>();
  data.dbStatus === "down"
    ? console.log("db is down")
    : console.log("db is up");
  return (
    <main className="container">
      <h1 className="text-h1 font-headings">We're Live!</h1>
      <p>Testing dev env</p>
      <p>DB Status: {data.dbStatus}</p>
    </main>
  );
}
