import type { NextApiRequest, NextApiResponse } from "next";
import Creator from "@/db/creator";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { address } = req.query;
    const creator = await Creator.findOne({ creatorAddress: address });
    if (creator) {
      res.status(200).json({ message: "Creator exist", data: true });
      return;
    } else {
      res.status(200).json({ message: "Creator doesn't exist", data: false });
      return;
    }
  }
  if (req.method === "POST") {
    const { address } = req.body;

    const creator = await Creator.findOne({ creatorAddress: address });
    if (!creator) {
      const newCreator = new Creator({
        creatorAddress: address,
      });
      await newCreator.save();
      res.status(200).json({ message: "Creator profile created" });
      return;
    } else {
      res.status(200).json({ message: "Creator already exist", data: creator });
      return;
    }
  }
}
