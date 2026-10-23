function FinishScreen({ points, maxPossiblePoints, highScore }) {
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
    </>
  );
}

export default FinishScreen;
