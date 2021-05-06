
function solution(arr){
    let answer=1;
    let seen = [];
    seen.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > seen[seen.length - 1]) {
            seen.push(arr[i]);
            answer++;
        }
    }
    return answer;
}

function solution2(arr) {
    let answer = 1, max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            answer++;
            max=arr[i];
        }
    }
    return answer;
}
let arr=[110, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
console.log(solution2(arr));