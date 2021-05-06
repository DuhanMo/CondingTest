function solution(k, arr){
    let answer = 0;
    let lt = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    console.log("처음 3일간의 매출기록", sum);
    answer = sum;
    for (let rt = k; rt < arr.length; rt++) {
        // sum -= arr[lt++];
        // sum += arr[rt];
        sum += (arr[rt] - arr[rt-k]);
        answer = Math.max(answer, sum);
    }

    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));