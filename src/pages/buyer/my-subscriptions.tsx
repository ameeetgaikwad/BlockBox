import Layout from "@/components/Layout/Layout";
import BuyerNFTList from "@/views/Buyer/components/BuyerNFTList";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

function MySubscription() {
  const { address: account, isConnected } = useAccount();
  const [display, setDisplay] = useState(false);
  const [subscriptions, setSubscriptions] = useState();
  async function fetchBuyerSubscription() {
    try {
      const res = await axios.get("/api/buyer/subscription", {
        params: {
          address: account,
        },
      });
      console.log("in fetchCreatorSubscription", res);
      setSubscriptions(res.data.subscriptions);
    } catch (e) {
      console.log("Error at MyCreator.tsx", e);
    }
  }

  useEffect(() => {
    fetchBuyerSubscription();
    if (isConnected) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [isConnected, account]);
  return (
    <>
      <Layout>
        {display ? (
          <BuyerNFTList subscriptions={subscriptions} />
        ) : (
          <ConnectButton />
        )}
      </Layout>
    </>
  );
}

export default MySubscription;
