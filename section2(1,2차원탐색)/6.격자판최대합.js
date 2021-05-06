function solution(arr){
    let answer=0;
    let sumArray = [];
    let sum1 = 0;
    let sum2 = 0;
    // 행과 열의 각각합을 저장 후 answer 대체
    for (let i = 0; i < arr.length; i++) {
        sum1 = 0;
        sum2 = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        answer = Math.max(answer, sum1, sum2);
    }
    sum1 = 0;
    sum2 = 0;
    // 대각선 합 구하기
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][arr.length - i - 1];
    }
    answer = Math.max(answer, sum1, sum2);
    return answer;
}
let arr=[
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
];
console.log(solution(arr));