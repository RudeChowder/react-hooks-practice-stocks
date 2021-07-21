import React from "react";

function Stock({ stock, onClickStock }) {
  const { name, price } = stock

  return (
    <div onClick={() => onClickStock(stock)} >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
