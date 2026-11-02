import { useQuiz } from "./QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highScore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;

  //   let emoji;
  //   if (percentage === 100) emoji = "";
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>

      <p className="highscore">(Highscore: {highScore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
