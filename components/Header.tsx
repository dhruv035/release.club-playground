import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter} from "next/router";

export const Header = () => {
  const router= useRouter();
  const handleClick=(e)=>{
    e.preventDefault()
    router.push(e.currentTarget.value)
  }
  
  return (
    <div className="flex flex-row-reverse justify-start max-w-8xl mx-auto my-8 items-center">
      <div>
        <ConnectButton
          accountStatus="address"
          showBalance={false}
        />
      </div>
      
      <div className="text-xl text-main-gray-dark mr-8">
        <button value="mint" onClick={(e)=>handleClick(e)}>
          <p>Mint NFT</p>
        </button>
      </div>
      <div className="text-xl text-main-gray-dark mr-8">
        <button value="contracts" onClick={(e)=>handleClick(e)}>
          <p>View Contracts</p>
        </button>
      </div>
      <div className="text-xl text-main-gray-dark mr-8">
        <button value="createContract" onClick={(e)=>handleClick(e)}>
          <p>Create Contract</p>
        </button>
      </div>
      {/* <Link href="/">
        <img src="../assets/release_club_logo.png" />
      </Link> */}
      
    </div>
  );
};
