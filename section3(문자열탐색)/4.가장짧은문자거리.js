function solution(str, t){
    let answer=[];
    let p = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== t) {
            p++;
        } else {
            p = 0;
        }
        answer.push(p);
    }
    p = Number.MAX_SAFE_INTEGER;
    for (let i = str.length-1; i >=0 ; i--) {
        if (str[i] !== t) {
            p++;
        } else {
            p = 0;
        }
        answer[i] = Math.min(answer[i], p);
    }

    return answer;
}

let str="teachermodeasdasdasde";
console.log(solution(str, 'e'));