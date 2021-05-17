import React, { Component, useEffect, useState, Suspense } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './components/Home';
import HotelList from './components/Hotellist';
import "./App.css";

const App = () => {
  const [ storageValue, setStorageValue ] = useState(0);
  const [ web3, setWeb3 ] = useState(null);
  const [ accounts, setAccounts ] = useState(null);
  const [ contract, setContract ] = useState(null);

  useEffect(() => {
    const f = async() => {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
  
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
  
        // Get the contract instance.
        const networkId: string = await web3.eth.net.getId();
        const networks: object = SimpleStorageContract.networks;
        const deployedNetwork = (networks as any)[networkId];
        const instance = new web3.eth.Contract(
          SimpleStorageContract.abi,
          deployedNetwork && deployedNetwork.address,
        );
  
        setWeb3(web3);
        setAccounts(accounts);
        setContract(instance);
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    };
    f();
  }, []);

    if (!web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/hotellist" component={HotelList}/>
      </Router>
    );
}

export default App;
