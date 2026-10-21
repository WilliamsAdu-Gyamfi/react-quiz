import { useState } from "react";

const DateCounter = function () {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("October 21 2026");
  date.setDate(date.getDate() + count);

  const handleDecreaament = function () {
    setCount((count) => count - step);
  };

  const handleIncreament = function () {
    setCount((count) => count + step);
  };

  const handleReset = function () {
    setCount("");
    setStep("");
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>{" "}
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handleDecreaament}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>

        <button onClick={handleIncreament}>+</button>
      </div>

      <div>
        <span>{date.toDateString()}</span>
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default DateCounter;
