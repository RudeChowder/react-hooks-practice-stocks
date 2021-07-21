import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks }) {
  const listOfStocks = stocks.map(stock => {
    return (
      <Stock key={stock.id} stock={stock} />
    )
  })

  return (
    <div>
      <h2>Stocks</h2>
      {listOfStocks}
    </div>
  );
}

export default StockContainer;
