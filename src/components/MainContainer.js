import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(resp => resp.json())
      .then(data => setStocks(data))
  }, [])

  const handleClickStock = (stock) => {
    if (portfolio.includes(stock)){
      const updatedPortfolio = portfolio.filter(s => s.id !== stock.id)
      setPortfolio(updatedPortfolio)
    } else {
      setPortfolio([...portfolio, stock])
    }
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onClickStock={handleClickStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onClickStock={handleClickStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
