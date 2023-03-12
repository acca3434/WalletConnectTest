
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal,useWeb3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig,} from 'wagmi'
import { arbitrum, mainnet, polygon, bsc, bscTestnet, goerli } from 'wagmi/chains'
import Homepage from "./view/Homepage"
const chains = [arbitrum, mainnet, polygon, goerli, bsc, bscTestnet];
const projectId = 'f85ccd6a72bcb04b8fa287ba34b90bf2';

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)
function App() {

const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
// setDefaultChain("polygon");
const options = {
  route: "Account" | "ConnectWallet" | "Help" | "SelectNetwork"
  };
  if (isOpen) {
   open(options);    
  }
// Close modal
  // if (!isOpen) {
  //   close();
  // }
  return (
    <>
      <WagmiConfig client={wagmiClient}>
      <Homepage />정상적으로 바꿔지는지 확인
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default App;