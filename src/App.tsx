import React from 'react';
import './App.css';

// Using web3react core
import { ethers } from 'ethers';
import { Web3ReactProvider } from "@web3-react/core"
import Layout from './components/Layout';
import Content from './components/Content';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
const getLibrary = (provider: ethers.providers.ExternalProvider) => {
  return new ethers.providers.Web3Provider(provider)
}

function App() {
  const { account } = useWeb3React()
  // const creatorAccount: string | undefined = account
  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      </Layout>
    </Web3ReactProvider>
  );
}

export default App;
