import { redirect } from "next/navigation";
import { authClient } from "./_lib/auth-client";
import { headers } from "next/headers";
import { getHomeData } from "./_lib/api/fetch-generated";
import dayjs from "dayjs";

export default async function Home() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  if (!session.data?.user) redirect("/auth");

  const homeData = await getHomeData(dayjs().format("YYYY-MM-DD"));

  console.log(homeData);

  return <h1>Home</h1>;
}
