// app/routes/_index.jsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json({ message: "Success! The Waitlist App is running." });
}

export default function Index() {
  const { message } = useLoaderData();
  return (
    <div style={{ padding: "40px", fontFamily: "system-ui, sans-serif" }}>
      <h1>{message}</h1>
      <p>Your infrastructure is fully connected.</p>
    </div>
  );
}