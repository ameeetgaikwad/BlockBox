import type { NextApiRequest, NextApiResponse } from "next";
import Subscription from "@/db/subscription";
import Buyer from "@/db/buyer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { address, title, symbol, image, price, benifits } = req.body;
    const newSubscription = new Subscription({
      NFTAddress: address,
      title,
      symbol,
      image,
      price,
      benifits,
    });
    await newSubscription.save();
    const buyer = await Buyer.findOne({ buyerAddress: address });
    buyer.purchasedSubscriptions.push(newSubscription._id);
    res.status(200).json({ message: "Subscription bought successfully" });
  }
}
