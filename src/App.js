import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal,Web3NetworkSwitch,Web3Button} from '@web3modal/react'
import { configureChains, createClient, WagmiConfig,} from 'wagmi'
import { arbitrum, mainnet, polygon, bsc, bscTestnet, goerli } from 'wagmi/chains'
import WalletConnectConnectorV1 from './view/WalletConnectConnectorV1'
import styled from 'styled-components'

const Button = styled.button`
  background-color: black;
  color: white;
  display : inline-block;
  font-size: 20px;
  height : 40px;
  width : auto;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
const projectData = {
  projectId: process.env.REACT_APP_PRJECTID,
  projectUri: process.env.REACT_APP_PROJECTURI,
  projectInfura:process.env.REACT_APP_INFURAID
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
        <Web3Button />
        <Button onClick={WalletConnectConnectorV1}>
          MobileConnectWallet
        </Button>
        <Web3NetworkSwitch/>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default App;