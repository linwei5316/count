const g = (N) => {
  const targetValue = 7;

  let result = 0;
  for(let i = 1; i <= N; i++) {
    result += String(i)
      .split('')
      .filter((s) => s === String(targetValue)).length;
  }

  return result;
}

module.exports = g;
