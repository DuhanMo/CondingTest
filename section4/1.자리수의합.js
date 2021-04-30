function solution(n, arr) {
    let answer = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let x of arr) {
        // 각각의 숫자를 이용
        // let sum = 0;
        // let tmp = x;
        // while (tmp) {
        //     sum += tmp%10;
        //     tmp = Math.floor(tmp / 10);
        // }
        // 한줄로 처리하는것
        let sum = x.toString()
            .split('').reduce((a,b)=>a+Number(b),0);
        if (sum > max) {
            max = sum;
            answer = x;
        } else if(sum === max) {
            if(x > answer) answer = x;
        }
    }
    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));