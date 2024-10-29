// // import {NextRequest, NextResponse} from "next/server";

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// // export async function POST(req: Request) {
// //   const res = await req.json();

// //   console.log("from: ", res);

// // }
// import {NextResponse} from "next/server";
// import Stripe from "stripe";

// export async function POST(request: Request) {
//   const res = await request.json();
//   console.log(res);

//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//   const {amount}

//   // if (res) {
//   //   try {
//   //     const session = await stripe.checkout.sessions.create({
//   //       payment_method_types: ["card"],
//   //       line_items: [{price: res, quantity: 1}],
//   //       // metadata: {userId, email, subscription},
//   //       mode: "payment",
//   //       success_url: `http://localhost:3000/success`,
//   //       // cancel_url: `http://localhost:3000/cancel`,
//   //     });

//   //     console.log(session);
//   //     return Response.json({sessionId: "sc"});
//   //   } catch (error) {
//   //     console.error("Error creating checkout session:", error);

//   //     return Response.json({error: "Failed to create checkout session"});
//   //   }
//   // }
//   return Response.json(
//     {res},
//     {
//       status: 200,
//       headers: {
//         "Set-Cookie": `sessionToken=${res.token}; Path=/`,
//       },
//     },
//   );
// }
