import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

function Header() {
  return (
    <>
      <div className="flex flex-row justify-between py-5 px-5 w-full">
        <div>
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div>
          <ConnectButton />
        </div>
      </div>
    </>
  );
}

export default Header;
