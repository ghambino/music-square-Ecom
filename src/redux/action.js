export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const removeItem = () => {
  return {
    type: "REMOVEITEM",
  };
};
export const incrementItem = (id) => {
  return {
    type: "INCREMENT",
    payload: id,
  };
};
export const decrementItem = (id) => {
  return {
    type: "DECREMENT",
    payload: id,
  };
};
