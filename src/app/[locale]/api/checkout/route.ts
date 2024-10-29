const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request: Request) {
  const res = await request.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: res.amount,
    currency: "usd",
    automatic_payment_methods: {enabled: true},
  });

  return Response.json({clientSecret: paymentIntent.client_secret});
}
