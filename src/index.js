import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./Styles/index.css";
import App from "./Components/App";

import "@rainbow-me/rainbowkit/styles.css";
import {
  argentWallet,
  braveWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  omniWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
  connectorsForWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const root = ReactDOM.createRoot(document.getElementById("root"));

// RAINBOW-KIT

const { chains, provider } = configureChains([goerli], [publicProvider()]);

const connectors = connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      rainbowWallet({ chains }),
      coinbaseWallet({ chains }),
      injectedWallet({ chains }),
      metaMaskWallet({ chains }),
      walletConnectWallet({ chains }),
    ],
  },
  {
    groupName: "More",
    wallets: [
      argentWallet({ chains }),
      trustWallet({ chains }),
      omniWallet({ chains }),
      imTokenWallet({ chains }),
      ledgerWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

//
// const { provider } = configureChains(chains, [
//   walletConnectProvider({ projectId: "5e724c76a001ab0a21c52684b804729d" }),
// ]);
// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors: modalConnectors({
//     projectId: "5e724c76a001ab0a21c52684b804729d",
//     version: "1",
//     appName: "Veritty",
//     chains,
//   }),
//   provider,
// });
// // Web3Modal Ethereum Client
// const ethereumClient = new EthereumClient(wagmiClient, chains);

root.render(
  <>
    <React.StrictMode>
      <HashRouter>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider theme={darkTheme()} chains={chains}>
            <App />
          </RainbowKitProvider>
        </WagmiConfig>
      </HashRouter>
    </React.StrictMode>
  </>
);
