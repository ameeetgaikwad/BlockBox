import { formatContent } from "@/utils/formatContent";
import Link from "next/link";
type Props = {
  subscription: {
    NFTAddress: string;
    title: string;
    symbol: string;
    image: string;
    price: string;
    benifits: string[];
    _id: string;
  };
};

function NFTBalanceCard({ subscription }: Props) {
  const { title, symbol, image, price, benifits, NFTAddress } = subscription;
  return (
    <>
      <div className="card w-64 bg-base-100 shadow-xl">
        <figure>
          {image ? (
            <img src={image} alt="nft" width={300} height={200} />
          ) : (
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="nft"
              width={300}
              height={400}
            />
          )}
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title">{title}</h2>
            <div className="flex flex-row justify-between">
              <span className="badge badge-outline badge-accent">{symbol}</span>
              <span className="badge badge-neutral">{price}ether</span>
            </div>
          </div>

          <p>{formatContent(benifits[0])}</p>
          <div className="card-actions justify-end">
            <Link
              href={`/creator/${subscription._id}`}
              className="btn btn-primary"
            >
              More details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NFTBalanceCard;
