import NFTBalanceCard from "@/components/NFTBalance/NFTBalanceCard";

type Props = {
  subscriptions?: [
    {
      NFTAddress: string;
      title: string;
      symbol: string;
      image: string;
      price: string;
      benifits: string[];
    }
  ];
};

function CreatorNFTList({ subscriptions }: Props) {
  return (
    <>
      <div className="mt-40 sm:mt-20">
        <div className="flex flex-row justify-center">
          <p className="text-xl font-bold">Subscriptions you have created</p>
        </div>
        <div className="">
          <div className="my-24 flex flex-row gap-x-3 gap-y-3 flex-wrap justify-center pl-8">
            {subscriptions?.map((subscription, _id) => {
              return <NFTBalanceCard key={_id} subscription={subscription} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatorNFTList;