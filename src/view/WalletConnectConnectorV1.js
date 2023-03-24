import {WalletConnectConnector} from "@web3-react/walletconnect-connector"
const WalletConnectConnectorV1 = async () => {
    const projectData = {
        projectId: process.env.REACT_APP_PRJECTID,
        projectUri: process.env.REACT_APP_PROJECTURI,
        projectInfura: process.env.REACT_APP_INFURAID
    };
    const walletconnect = new WalletConnectConnector({
        rpc: {80001: "https://endpoints.omniatech.io/v1/matic/mumbai/public"},
        qrcode: true,
        infuraId: projectData.projectInfura,
        pollingInterval: 15000
    });
    await walletconnect.activate(walletconnect, undefined, true).catch((err) =>
    {
        console.log(err);
        walletconnect.walletConnectProvider = undefined;
    });
};

export default WalletConnectConnectorV1;
