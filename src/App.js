import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import CollectionCard from './components/CollectionCard/CollectionCard';
import axios from 'axios';
import Punklist from './components/Punklist/Punklist';

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x965c9e7362Fe55f71cea872C0D0ff78606a44bDF&order_direction=asc');

      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])
  return (
    <div className="app">
      <Header />
      <Punklist punkListData={punkListData} />
    </div>
  )
}

export default App
