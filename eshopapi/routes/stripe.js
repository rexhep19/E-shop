const router = require("express").Router();
const KEY =
  "sk_test_51MumYBDWkq43tNAN5YGNFcySweR3WCGkvP6u9ObMFuFWk4HwJYB1htUQCu8YGlTtuJGiVnzHzvh9cGTltGPEDqoB00yAVjC5rU";
const stripe = require("stripe")(KEY);

router.post("/payment", async (req, res) => {
  console.log("Received request:", req.body);
  try {
    const charge = await stripe.charges.create({
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    });

    console.log("Charge created:", charge);
    res.status(200).json(charge);
  } catch (stripeErr) {
    console.error("Stripe error:", stripeErr);
    res.status(500).json(stripeErr);
  }
});

module.exports = router;
