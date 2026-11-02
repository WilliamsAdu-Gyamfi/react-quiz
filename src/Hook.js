import { useReducer } from "react";

const reducer = function (state, action) {
  switch (action.type) {
    case "add":
      return state + 1;

    case "substrate":
      return state - 1;

    case "increaseTrice":
      return state + action.payload;

    default:
      return state;
  }
};

const Counter = function () {
  const [count, dispatch] = useReducer(reducer, 0);

  const handleSubstrate = function () {
    dispatch({ type: "substrate" });
  };
  const handleAdd = function () {
    dispatch({ type: "add" });
  };

  const handleTrice = function () {
    dispatch({ type: "increaseTrice", payload: 3 });
  };

  return (
    <>
      <div>
        <button onClick={handleSubstrate}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
      </div>
      <button onClick={handleTrice}>Increase By 3</button>
    </>
  );
};

export default Counter;
