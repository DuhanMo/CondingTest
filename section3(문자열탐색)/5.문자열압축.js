function solution(str) {
    let answer = "";
    let cnt = 1;
    str=str+" ";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            cnt++;
        } else {
            answer += str[i];
            if (cnt > 1) {
                answer += cnt;
                cnt = 1;
            }
        }
    }
    return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));