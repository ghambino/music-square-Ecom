const cart = [];

const cartReducer = (state = cart, action) => {
     switch (action.type) {
        case "ADDITEM": {
            const product = action.payload;
            //if it already exist in the cart array
            const existing = state.find(unit => unit.id == product.id);
            if(existing){
                return state.map((x) => {
                    x.id == product.id ? {...x, qty: x.qty + 1} : x
                })
            }else {
                return [...state, {...product, qty: 1}]
            }
        }

        case "REMOVEITEM":{
            const product = action.payload
            return state.filter(unit => unit.id !== product.id)
        }
        default:
            return state
            break;
     }
}

export default cartReducer