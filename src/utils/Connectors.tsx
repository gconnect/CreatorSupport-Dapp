import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { UAuthConnector } from '@uauth/web3-react'

export const CoinbaseWallet = new WalletLinkConnector({
 url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
 appName: "Web3-react Demo",
 supportedChainIds: [1, 3, 4, 5, 42, 80001],
});

export const WalletConnect = new WalletConnectConnector({
 infuraId: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});

export const Injected = new InjectedConnector({
 supportedChainIds: [1, 3, 4, 5, 42, 80001]
});

export const uauth = new UAuthConnector({
  clientID: "fa2c185c-4344-4420-8471-520fb15eebbb",
  redirectUri: "http://localhost:3000",
  // postLogoutRedirectUri: "http://localhost:3000",
  // Scope must include openid and wallet
  scope: 'openid wallet',

  // Injected and walletconnect connectors are required.
  connectors: {injected: Injected, walletconnect: WalletConnect},
})