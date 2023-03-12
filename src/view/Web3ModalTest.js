import { UniversalProvider } from '@walletconnect/universal-provider';
import { Web3Modal } from '@web3modal/standalone';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const web3Modal = new Web3Modal({ 
  standaloneChains: ["eip155:1", "eip155:137"]
});
web3Modal.setTheme({
  themeMode: "light",
  themeColor: "blackWhite",
  themeBackground: "gradient",
});
const projectData = {
  projectId: process.env.REACT_APP_PRJECTID,
  projectUri: process.env.REACT_APP_PROJECTURI,
};
export default function HomePageTest() {
  const [childProvider, setChildProvider] = useState();
  const [parentProvider, setParentProvider] = useState();
  const [tokenName, setTokenName] = useState();
  async function onInitializeSignClient() {
    const provider = await UniversalProvider.init({
      projectId: projectData.projectId,
      metadata: {
        name: "WalletConnectTest",
        description: "WalletConnectTest",
        url: projectData.projectUri,
        icons: ["https://lh3.googleusercontent.com/ogw/AOh-ky0c2alK5GAwefGWkwQHVpcJR637KRzHSZx9dV31rg=s32-c-mo"],
      },
    }).catch((e) => console.log("initialization failed - reload dapp"));
    provider?.on("display_uri", async (uri) => {
      web3Modal?.openModal({ uri });
    });

    provider?.on("session_ping", (e) => {
      console.log("session_ping",e);
    });
    
    provider?.on("session_event", (e) => {
      console.log("session_event",e);
    });

    provider?.on("session_request", (event) => {
      console.log(event);
    });

    provider?.on("session_update", (e) => {
      console.log("session_update",e);
    });

    provider?.on("session_delete", () => {
      console.log("session ended");
    });
          
    
    setChildProvider(provider);

    if (provider?.session) {
      const web3Provider = new ethers.providers.Web3Provider(provider);
      setParentProvider(web3Provider);

      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      const chainId = await signer.getChainId();
      console.log(address, chainId);
    }

    console.log("loaded, done");
  }

  async function onOpenModal() {
    await childProvider?.connect({
      namespaces: {
        eip155: {
          methods: [
            "eth_sendTransaction",
            "eth_signTransaction",
            "eth_sign",
            "personal_sign",
            "eth_signTypedData",
          ],
          chains: ["eip155:1", "eip155:137"],
          events: ["chainChanged", "accountsChanged"],
          rpcMap: {
            1:'https://mainnet.infura.io/v3/e9761af980254c2e8fcbff94c21dd59e',
            137: 'https://rpc.ankr.com/polygon',
          },
        },
      },
    })
      .then((e) => console.log(e))
      .catch((e) => console.log(e));

    childProvider?.setDefaultChain("eip155:137");

    web3Modal?.closeModal();

    const web3Provider = new ethers.providers.Web3Provider(childProvider);
    setParentProvider(web3Provider);

    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    const chainId = await signer.getChainId();
    console.log(address, chainId)
    
  }

  useEffect(() => {
    onInitializeSignClient().catch((e)=> console.log(e))
  }, [])

  const disconnect = ()=>{
    childProvider?.disconnect()
    window.localStorage.clear()
  }

  const interact = async()=>{

    const contractAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'

    const ERC20Abi = [
      "function name() view returns (string)",
      "function approve(address spender, uint256 amount)"
    ];

    const signer = parentProvider.getSigner()
    const erc20Contract = new ethers.Contract(contractAddress, ERC20Abi, signer)

    const name = await erc20Contract.name().catch((e)=> {
      if(e.code === 5000) console.log('user rejected transaction')
      console.error(e)
    })

    console.log(name)

    setTokenName(name)

  }

  return (
    <>
    <button onClick={onOpenModal}>Connect Wallet</button>
    <button onClick={disconnect}>Bye Wallet</button>
    {tokenName}
    <button onClick={interact}>{ tokenName ? tokenName : 'call contract :3' }</button>
    </>
  )
}