export async function POST(request: Request) {
  console.log(await request.json());

  return Response.json({sessionCookie: ""});
}
