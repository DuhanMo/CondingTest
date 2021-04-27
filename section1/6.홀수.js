function solution(arr) {
  let answer = [];
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (const x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) {
        min = x;
      }
    }
  }
  answer.push(sum, min);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
