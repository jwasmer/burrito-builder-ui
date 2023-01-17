import React from 'react';
import './Orders.css';

export default function Orders({ orders }) { 

  const orderMaker = (orders) => {
    if (orders) {
      return  orders.map(order => {
        return (
          <div className="order">
            <h3>{order.name}</h3>
            <ul className="ingredient-list">
              {order.ingredients.map(ingredient => {
                return <li>{ingredient}</li>
              })}
            </ul>
          </div>
        )
      })
    }
  }

  

  return (
    <section>
      { orderMaker() ? orderMaker() : <p>No orders yet!</p> }
    </section>
  )
}
