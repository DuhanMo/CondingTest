function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] < min) {
  //     min = arr[i];
  //   }
  // }
  // answer = min;

  // 내장함수 이용하기
  // 배열같은 객체가 넘어가면 안됨
  // 배열을 뿌려줘야함 -> 전개연산자
  answer = Math.min(...arr);
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
