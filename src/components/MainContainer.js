import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [filter, setFilter] = useState("")
  const [sort,setSort] = useState("")

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredStocks = stocks.filter(stock => {
    if (filter === "") { return true} 
    else {return stock.type === filter}
  })

  return (
    <div>
      <SearchBar onFilterChange={handleFilterChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onClickStock={handleClickStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onClickStock={handleClickStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
