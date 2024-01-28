import type { NextApiRequest, NextApiResponse } from "next";
import Buyer from "@/db/buyer";
type Data = {
  name: string;
};

export default async function initializeBuyer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { address } = req.query;
    const buyer = await Buyer.findOne({ BuyerAddress: address });
    if (buyer) {
      res.status(200).json({ message: "Creator exist", data: true });
      return;
    } else {
      res.status(200).json({ message: "Creator doesn't exist", data: false });
      return;
    }
  }
  if (req.method === "POST") {
    const { address } = req.body;

    const buyer = await Buyer.findOne({ BuyerAddress: address });
    if (!buyer) {
      const newBuyer = new Buyer({
        BuyerAddress: address,
      });
      await newBuyer.save();
      res.status(200).json({ message: "Creator profile created" });
      return;
    } else {
      res.status(200).json({ message: "Creator already exist", data: buyer });
      return;
    }
  }
}
