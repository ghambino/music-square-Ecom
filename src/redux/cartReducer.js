
// const cartItems = localStorage.getItem('cartItems')

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDITEM": {
      const product = action.payload;
      // if it already exist in the cart array
      const existing = state.find((unit) => unit.id === product.id);
      if (existing) {
        window.localStorage.setItem("cartItem", JSON.stringify(state.map(unit => unit.id === existing.id ? {...existing, qty: existing.qty + 1} : unit)))
        return state.map(unit => unit.id === existing.id ? {...existing, qty: existing.qty + 1} : unit)
      } else {
         window.localStorage.setItem("cartItem", JSON.stringify([...state, { ...product, qty: 1 }]))
         return [...state, { ...product, qty: 1 }];
      }
    }

    case "REMOVEITEM": {
      //  state.filter((unit) => unit.id !== product.id);
      return state
    }

    case "INCREMENT": {
      const id = action.payload;
      //find the item using the id
      const focusedItem = state.find(unit => unit.id === id)
      return state.map(unit => unit.id === focusedItem.id ? {...focusedItem, qty: focusedItem.qty + 1} : unit)
    }

    case "DECREMENT": {
      const id = action.payload;
      //find the item using the id
      const focusedItem = state.find(unit => unit.id === id)
      return state.map(unit => unit.id === focusedItem.id ? {...focusedItem, qty: focusedItem.qty >= 2 ? focusedItem.qty - 1 : 1} : unit)
    }
    default:
      return state;
  }
};

export default cartReducer;
