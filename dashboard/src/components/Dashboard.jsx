
import React from "react";
import { Route, Routes } from "react-router-dom";


import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import { GeneralContextProvider } from "./GeneralContext";
import {GeneralContextProviderSell} from "./GeneralContextForSell";
import WatchList from "./WatchList";
import Profile from "./Profile";



const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <GeneralContextProviderSell>
          
        <WatchList />
        
        </GeneralContextProviderSell>
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/profile" element={<Profile />} />
               
       
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
