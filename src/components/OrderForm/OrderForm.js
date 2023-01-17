import React, { useState, useEffect } from 'react';
import { postOrders } from '../../apiCalls';

export default function OrderForm({ setOrders }) {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (ingredients.length && name) {
      postOrders({
        name: name,
        ingredients: ingredients
      })
      .then(data => {
        setOrders(data)
      })
      clearInputs()
    }
  }

  const handleIngredientsChange = (event) => {
    event.preventDefault()
    const eventIngredient = event.target.name
    setIngredients((prevState) => [...prevState, eventIngredient])
  }

  const clearInputs = () => {
    setName('')
    setIngredients([])
  }

  useEffect(() => {
  }, [name])

  useEffect(() => {
  }, [ingredients])

  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
  const ingredientButtons = possibleIngredients.map(ingredient => {
    return (
      <button data-cy={`button-${ingredient}`} key={ingredient} name={ingredient} onClick={event => handleIngredientsChange(event)}>
        {ingredient}
      </button>
    )
  });

  return (
    <form>
      <input
        data-cy="name-input"
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={event => setName(event.target.value)}
      />

      { ingredientButtons }

      <p data-cy="order-confirmation">Order: { ingredients.join(', ') || 'Nothing selected' }</p>

      <button data-cy="submit-order" onClick={event => handleSubmit(event)}>
        Submit Order
      </button>

      <button data-cy="clear-inputs" onClick={clearInputs}>
        Clear Inputs
      </button>
    </form>
  )
}

// }


// class OrderForm extends Component {
//   constructor(props) {
//     super();
//     this.props = props;
//     this.state = {
//       name: '',
//       ingredients: []
//     };
//   }

//   render() {
//     const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
//     const ingredientButtons = possibleIngredients.map(ingredient => {
//       return (
//         <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
//           {ingredient}
//         </button>
//       )
//     });

//     return (
//       <form>
//         <input
//           type='text'
//           placeholder='Name'
//           name='name'
//           value={this.state.name}
//           onChange={e => this.handleNameChange(e)}
//         />

//         { ingredientButtons }

//         <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

//         <button onClick={e => this.handleSubmit(e)}>
//           Submit Order
//         </button>
//       </form>
//     )
//   }
// }

// export default OrderForm;
