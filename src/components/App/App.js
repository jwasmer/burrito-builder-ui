import React, { Component, useEffect, useState } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import OrderForm from '../../components/OrderForm/OrderForm';

export default function App() {
  const [orders, setOrders] = useState(null)

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm />
      </header>

      <Orders orders={this.state.orders}/>
    </main>
  );
}


// class App extends Component {
//   constructor(props) {
//     super();
//   }

// componentDidMount() {
//   getOrders()
//     .catch(err => console.error('Error fetching:', err));
// }
