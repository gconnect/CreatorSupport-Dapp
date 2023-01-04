import React from 'react';
import './App.css';


// Using web3react core
import { ethers } from 'ethers';
import { Web3ReactProvider } from "@web3-react/core"
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
    </Web3ReactProvider>
  );
}

export default App;
