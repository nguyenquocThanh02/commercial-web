export async function POST(request: Request) {
  const res = await request.json();

  console.log("token: ", res);

  return Response.json(
    {res},
    {
      status: 200,
      headers: {
        "Set-Cookie": `sessionToken=${res.token}; Path=/`,
      },
    },
  );
}
