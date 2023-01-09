import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { UAuthConnector } from '@uauth/web3-react'

// Login with coinbase wallet
export const CoinbaseWallet = new WalletLinkConnector({
  url: `https://polygon-mumbai.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`,
 appName: "Web3-react Demo",
 supportedChainIds: [80001, 1, 3, 4, 5, 42],
});

// Login with walletconnect
export const WalletConnect = new WalletConnectConnector({
 infuraId:`https://mainnet.infura.io/v3/e0c1df0b8f7441beb006aa1a3485a385`,
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});

// Login with Metamask
export const Injected = new InjectedConnector({
 supportedChainIds: [80001, 1, 3, 4, 5, 42]
});

// Login with unstoppable
export const uauth = new UAuthConnector({
  clientID: process.env.REACT_APP_UNSTOPPABLE_CLIENT_ID,
  redirectUri: process.env.REACT_APP_UNSTOPPABLE_REDIRECT_URI,
  // Scope must include openid and wallet
  scope: 'openid wallet',
  // Injected and walletconnect connectors are required.
  connectors: {injected: Injected, walletconnect: WalletConnect},
})