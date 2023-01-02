import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import ConnectModal from './components/ConnectModal';
import ActivateConnectors from './utils/ActivateConnectors';

// Using web3react core
import { ethers } from 'ethers';
import { Web3ReactProvider } from "@web3-react/core"
import { useWeb3React } from '@web3-react/core'
import Header from './components/Header';
import Layout from './components/Layout';
import Content from './components/Content';

const getLibrary = (provider: ethers.providers.ExternalProvider) => {
  return new ethers.providers.Web3Provider(provider)
}

function App() {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout>
          <Content/>
      </Layout>
      {/* <Header/> */}
      {/* <ActivateConnectors/> */}
    </Web3ReactProvider>
  );
}

export default App;
