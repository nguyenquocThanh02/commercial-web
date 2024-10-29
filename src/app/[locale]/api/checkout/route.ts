// // import {NextRequest, NextResponse} from "next/server";

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// // export async function POST(req: Request) {
// //   const res = await req.json();

// //   console.log("from: ", res);

// // }

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request: Request) {
  const res = await request.json();

  console.log(res);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 50,
    currency: "usd",
    automatic_payment_methods: {enabled: true},
  });

  return Response.json({clientSecret: paymentIntent.client_secret});

  // if (res) {
  //   try {
  //     const session = await stripe.checkout.sessions.create({
  //       payment_method_types: ["card"],
  //       line_items: [{price: res, quantity: 1}],
  //       // metadata: {userId, email, subscription},
  //       mode: "payment",
  //       success_url: `http://localhost:3000/success`,
  //       // cancel_url: `http://localhost:3000/cancel`,
  //     });

  //     console.log(session);
  //     return Response.json({sessionId: "sc"});
  //   } catch (error) {
  //     console.error("Error creating checkout session:", error);

  //     return Response.json({error: "Failed to create checkout session"});
  //   }
  // }
  //   return Response.json(
  //     {res},
  //     {
  //       status: 200,
  //       headers: {
  //         "Set-Cookie": `sessionToken=${res.token}; Path=/`,
  //       },
  //     },
  //   );
}
