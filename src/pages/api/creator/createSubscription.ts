import type { NextApiRequest, NextApiResponse } from "next";
import Subscription from "@/db/subscription";
import Creator from "@/db/creator";

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
    const creator = await Creator.findOne({ creatorAddress: address });
    creator.createdSubscriptions.push(newSubscription._id);
    res.status(200).json({ message: "Subscription created successfully" });
  }
}
