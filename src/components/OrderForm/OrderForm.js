import React, { useState, useEffect } from 'react';
import { postOrders } from '../../apiCalls';

export default function OrderForm() {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    postOrders({
      name: name,
      ingredients: ingredients
    })
    clearInputs()
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
    console.log('Name update:', name)
  }, [name])

  useEffect(() => {
    console.log('Ingredients update:', ingredients)
  }, [ingredients])

  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
  const ingredientButtons = possibleIngredients.map(ingredient => {
    return (
      <button key={ingredient} name={ingredient} onClick={event => handleIngredientsChange(event)}>
        {ingredient}
      </button>
    )
  });

  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={event => setName(event.target.value)}
      />

      { ingredientButtons }

      <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>

      <button onClick={event => handleSubmit(event)}>
        Submit Order
      </button>

      <button onClick={clearInputs}>
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
