import { type } from "@testing-library/user-event/dist/type";
import { useReducer, useState } from "react";

const initialState = { count: 0, step: 1 };

const reducer = function (state, action) {
  // if(action.type === "handleIncreament") return state + 1
  // if(action.type === "handleDecreament") return state - 1
  // if(action.type === "setCount") return action.payload

  switch (action.type) {
    case "handleIncreament":
      return { ...state, count: state.count + state.step };

    case "handleDecreament":
      return { ...state, count: state.count - state.step };

    case "setCount":
      return { ...state, count: action.payload };

    case "setStep":
      return { ...state, step: action.payload };
    case "handleReset":
      // return{count: 0, step:1}
      return initialState;

    default:
      throw new Error("unkown action");
  }
};

const DateCounter = function () {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  // const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  const date = new Date("October 21 2026");
  date.setDate(date.getDate() + count);

  const handleDecreament = function () {
    // setCount((count) => count - step);
    dispatch({ type: "handleDecreament" });
  };

  const handleIncreament = function () {
    //  setCount((count) => count + step);
    dispatch({ type: "handleIncreament" });
  };

  const handleReset = function () {
    // setCount(0);
    // setStep(1);

    dispatch({ type: "handleReset" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        ></input>{" "}
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handleDecreament}>-</button>
        <input type="text" value={count} onChange={defineCount}></input>

        <button onClick={handleIncreament}>+</button>
      </div>

      <p>{date.toDateString()}</p>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default DateCounter;
