import {cookies} from "next/headers";

export async function POST(request: Request) {
  const res = await request.json();

  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");

  if (!sessionToken) {
    return Response.json({message: "Session token undefined"}, {status: 401});
  }

  return Response.json(
    {res},
    {
      status: 200,
      headers: {
        "Set-Cookie": `sessionToken=; Path=/`,
      },
    },
  );
}
