import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./Styles/index.css";
import "@rainbow-me/rainbowkit/styles.css";
import App from "./Components/App";
import {
  RainbowKitProvider,
  darkTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import {
  argentWallet,
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

const root = ReactDOM.createRoot(document.getElementById("root"));

const { chains, provider } = configureChains(
  [goerli],
  [publicProvider({ apiKey: "5e724c76a001ab0a21c52684b804729d" })]
);
const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      rainbowWallet({ chains }),
      coinbaseWallet({ chains, appName: "Veritty" }),
      metaMaskWallet({ chains }),
      walletConnectWallet({ chains }),
    ],
  },
  {
    groupName: "Others",
    wallets: [
      trustWallet({ chains }),
      argentWallet({ chains }),
      imTokenWallet({ chains }),
      injectedWallet({ chains }),
      omniWallet({ chains }),
      ledgerWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connectors,
  provider,
});

root.render(
  <>
    <HashRouter>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#7b3fe4",
            accentColorForeground: "white",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "small",
          })}
          chains={chains}
        >
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </HashRouter>
  </>
);
