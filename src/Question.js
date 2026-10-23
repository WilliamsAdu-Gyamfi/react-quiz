const Question = function ({ question, dispatch, answer }) {
  return (
    <div className="options">
      <h4>{question.question}</h4>
      {/* <Options question={question} /> */}
      {question.options.map((options, index) => (
        <Options
          options={options}
          key={options}
          answer={answer}
          dispatch={dispatch}
          index={index}
          question={question}
        />
      ))}
    </div>
  );
};

const Options = function ({ options, answer, dispatch, index, question }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      {/* {question.options.map((option) => (
        <button className="btn btn-option" key={option}>
          {option}
        </button>
      ))} */}
      <button
        className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""}`}
        disabled={hasAnswered}
        onClick={() => dispatch({ type: "newAnswer", payload: index })}
      >
        {options}
      </button>
    </div>
  );
};

export default Question;
