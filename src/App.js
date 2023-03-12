
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal,Web3NetworkSwitch} from '@web3modal/react'
import { configureChains, createClient, WagmiConfig,} from 'wagmi'
import { arbitrum, mainnet, polygon, bsc, bscTestnet, goerli } from 'wagmi/chains'
import Homepage from "./view/Homepage"

const projectData = {
  projectId: process.env.REACT_APP_PRJECTID,
  projectUri: process.env.REACT_APP_PROJECTURI,
};
const chains = [arbitrum, mainnet, polygon, goerli, bsc, bscTestnet];
const projectId = projectData.projectId;
const { provider } = configureChains(chains, [w3mProvider({projectId})])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  provider
})

const ethereumClient = new EthereumClient(wagmiClient, chains)
function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Homepage />
        <Web3NetworkSwitch/>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default App;

// /*
// import HomePageTest from './view/Web3ModalTest'
// import { Core } from "@walletconnect/core";
// import SignClient from "@walletconnect/sign-client";
// import {AuthClient}  from "@walletconnect/auth-client";


// const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
// // setDefaultChain("polygon");
// const options = {
//   route: "Account" | "ConnectWallet" | "Help" | "SelectNetwork"
//   };
//   if (isOpen) {
//     open(options).then(() => {
     
//    })
//   }

// // First instantiate a separate `Core` instance.
// const core = new Core({
//   projectId: "f85ccd6a72bcb04b8fa287ba34b90bf2",
// });

// const metadata = {
//   name: "Example Dapp",
//   description: "Example Dapp",
//   url: "#",
//   icons: ["https://walletconnect.com/walletconnect-logo.png"],
// };
// // Pass `core` to the SignClient on init.
// const signClient = await SignClient.init({ core, metadata });

// // Pass `core` to the AuthClient on init.
// const authClient = await AuthClient.init({ core, metadata });
 //     <HomePageTest/>
// */