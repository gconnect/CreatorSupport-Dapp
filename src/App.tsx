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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const getLibrary = (provider: ethers.providers.ExternalProvider) => {
  return new ethers.providers.Web3Provider(provider)
}

function App() {
    const queryClient = new QueryClient()
  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        </Layout>
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default App;
