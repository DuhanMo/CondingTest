function solution(inputString) {
    let answer = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < inputString.length; i++) {
        let sum = 0;
        for (let j = 0; j < inputString.length; j++) {
            let expense = 0;
            if (i !== j) {
                let start = inputString[i][0];
                let waitTime = Math.abs(inputString[j][0] - (start + 5));
                console.log(waitTime);
                expense = waitTime * inputString[j][1];
                console.log(expense);
            }
        }answer = Math.min(answer, sum);
    }
    return answer;
}

function solution2(inputString) {
    let answer = Number.MAX_SAFE_INTEGER;
    

    DFS(0, 0);
    return answer;
}
ads = [[1, 3], [3, 2], [5, 4]];
console.log(solution(ads));