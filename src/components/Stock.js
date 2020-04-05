import React from 'react'

const Stock = (props) => {
  let stock = props.stock 
  return (
    <div className="card" onClick={() => !props.portfolio_stock ? props.addToPortfolio(stock) : props.removeFromPortfolio(stock) }>
      <div className="card-body">
        <h5 className="card-title">{
            stock.name
          }</h5>
        <p className="card-text">{
            stock.price
          }</p>
      </div>
    </div>
  )
}

export default Stock
