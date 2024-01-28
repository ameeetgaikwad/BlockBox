import mongoose from "mongoose";
mongoose.connect(
  `mongodb+srv://ameeetgaikwad:${process.env.NEXT_PUBLIC_MONGODB_PASSWORD}@cryptopayindia.wsredxt.mongodb.net/BlockBox`
);

const subscriptionSchema = new mongoose.Schema({
  NFTAddress: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  symbol: { type: String, required: true },
  image: { type: String, required: false },
  price: { type: Number, required: true },
  benifits: [{ type: String }],
});

export default mongoose.models.Subscription ||
  mongoose.model("Subscription", subscriptionSchema);
