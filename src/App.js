import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import axios from 'axios';
import Punklist from './components/Punklist/Punklist';
import Main from './components/Main/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

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
      {
        punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
            <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
          </>
        )
      }
    </div>
  )
}

export default App
