import { useReducer } from "react";

// 1. Create the reducer function
function reducer(state, action) {
  if (action.type === "increase") {
    return state + 1;
  }

  if (action.type === "decrease") {
    return state - 1;
  }

  if (action.type === "reset") {
    return 0;
  }

  return state;
}

function App() {
  // 2. Initialize the state with useReducer
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Count: {count}</h1>

      {/* 3. Dispatch actions when buttons are clicked */}
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>

      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default App;
