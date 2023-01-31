import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, HashRouter} from "react-router-dom";
import './Styles/index.css';
import App from './Components/App';

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import {Web3Modal} from "@web3modal/react";
import {configureChains, createClient, WagmiConfig} from "wagmi";
import {arbitrum, mainnet, polygon, goerli} from "wagmi/chains";

const root = ReactDOM.createRoot(document.getElementById('root'));
const chains = [goerli];
const {provider} = configureChains(chains, [
  walletConnectProvider({projectId: "5e724c76a001ab0a21c52684b804729d"}),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({appName: "Veritty", chains}),
  provider,
});
// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

root.render(
  <>
    <React.StrictMode>
      <HashRouter>
        <WagmiConfig client={wagmiClient}>
          {/*<RainbowKitProvider chains={chains}>*/}
          <App/>
          {/*</RainbowKitProvider>*/}
        </WagmiConfig>
      </HashRouter>
    </React.StrictMode>
    <Web3Modal
      projectId="5e724c76a001ab0a21c52684b804729d"
      ethereumClient={ethereumClient}
    />
  </>
);
