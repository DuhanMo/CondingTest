function solution(a, b, c) {
  // 가장 긴막대를 제외한 두 막대의 합이 가장 긴막대보다
  // 커야한다.
  let answer = "YES",
    max;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (a + b + c - max <= max) answer = "NO";
  return answer;
}

console.log(solution(6, 7, 11));
