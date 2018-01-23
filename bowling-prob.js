// Calculates scores in the frames
function calculateSum(scoreArray) {
  let totalScore = 0;
  let i = 0;
  for (i = 0; i < scoreArray.length - 1; i += 1) {
    if (scoreArray[i].length === 1) {
      if (scoreArray[i + 1].length === 1) {
        totalScore += scoreArray[i][0] + scoreArray[i + 1][0] + scoreArray[i + 2][0];
      } else {
        totalScore += scoreArray[i][0] + scoreArray[i + 1][0] + scoreArray[i + 1][1];
      }
    } else if ((scoreArray[i][0] + scoreArray[i][1]) === 10) {
      totalScore += scoreArray[i][0] + scoreArray[i][1] + scoreArray[i + 1][0];
    } else if ((scoreArray[i][0] + scoreArray[i][1]) > 10) {
      return 'Invalid input';
    } else {
      totalScore += scoreArray[i][0] + scoreArray[i][1];
    }
  }
  totalScore += scoreArray[i].reduce((acc, element) => acc + element);
  return totalScore;
}
// Segregates scores into frames
function calculateScore(rollArray) {
  let frameCount = 0;
  let scoreArray = [];
  let i = 0;
  for (i = 0; i < rollArray.length && frameCount < 9; i += 1) {
    if (rollArray[i] === 10) {
      scoreArray[frameCount] = [10];
      frameCount += 1;
    } else if (rollArray[i] > 10 || rollArray[i] < 0) {
      return 'Invalid input';
    } else {
      scoreArray[frameCount] = [rollArray[i], rollArray[i + 1]];
      i += 1;
      frameCount += 1;
    }
  }
  if ((rollArray.length - i) === 3) {
    scoreArray[frameCount] = [rollArray[i], rollArray[i + 1], rollArray[i + 2]];
  } else {
    scoreArray[frameCount] = [rollArray[i], rollArray[i + 1]];
  }
  return calculateSum(scoreArray);
}
// Provides input to the calculateScore containing scores of individual rolls
function roll(bowlingFrames) {
  if (bowlingFrames.length < 10) {
    return 'Invalid input';
  }
  return calculateScore(bowlingFrames);
}

module.exports = {
  roll,
  calculateSum,
};
