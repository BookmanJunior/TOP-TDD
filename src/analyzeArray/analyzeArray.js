const analyzeArray = (arr) => ({
  average: average(arr),
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
});

function average(arr) {
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  return sum / arr.length;
}

export default analyzeArray;
