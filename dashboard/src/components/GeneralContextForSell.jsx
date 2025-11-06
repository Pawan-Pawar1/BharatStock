import React, { useState } from "react";

import SellActionWindow from "./SellActionWindow";

const GeneralContextForSell = React.createContext({
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProviderSell = (props) => {
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [price, setPrice]=useState(0);

  const handleOpenSellWindow = (uid,price) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
    setPrice(price);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContextForSell.Provider
      value={{
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} price={price} />}
    </GeneralContextForSell.Provider>
  );
};

export default GeneralContextForSell;