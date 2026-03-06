import { redirect } from "next/navigation";
import { authClient } from "./_lib/auth-client";
import { headers } from "next/headers";

export default async function Home() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  if (!session.data?.user) redirect("/auth");
  return <h1>Home</h1>;
}
