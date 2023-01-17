import React, { useEffect, useState } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import OrderForm from '../../components/OrderForm/OrderForm';
import Orders from '../Orders/Orders'

export default function App() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders()
      .catch(err => console.log('Error fetching:', err))
      .then((data) => {
        setOrders(data)
      })
  }, [])

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm />
      </header>

      <Orders 
        orders={ orders }/>
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
