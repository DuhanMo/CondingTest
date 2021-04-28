function solution(arr){
    let n = arr.length;
    // 배열 초기화
    let answer=Array.from({length:n},() => 1);
    // 본인 배열 자체에서 비교 시작하여 등수를 ++
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <n; j++) {
            if (arr[i] < arr[j]) {
                answer[i]++;
            }
        }
    }
    return answer;
}

let arr=[92, 89, 92, 100, 76];
console.log(solution(arr));