const Question = function ({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      {/* <Options question={question} /> */}
      {question.options.map((options) => (
        <Options options={options} key={options} />
      ))}
    </div>
  );
};

const Options = function ({ options }) {
  return (
    <div>
      {/* {question.options.map((option) => (
        <button className="btn btn-option" key={option}>
          {option}
        </button>
      ))} */}
      <button className="btn btn-option">{options}</button>
    </div>
  );
};

export default Question;
