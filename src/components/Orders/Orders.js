import React from 'react'
import './Orders.css';

export default function Orders({ orders }) {

  const mapOrders = (orders) => { 
    if (orders) {
      return orders.orders.map((order, orderIndex) => {
        return (
          <div data-cy={`order-${orderIndex}`} key={orderIndex} className="order">
            <h3 data-cy={`header-${orderIndex}`} >{order.name}</h3>
            <ul className="ingredient-list">
              {order.ingredients.map((ingredient, ingredientIndex) => {
                return <li data-cy={`ingredient-${ingredientIndex}`} key={ingredientIndex}>{ingredient}</li>
              })}
            </ul>
          </div>
        )
      })
    }    
  }

  return (
    <section>
      { orders ? mapOrders(orders) : <p>No orders yet!</p> }
    </section>
  )
}
