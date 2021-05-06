function solution(times) {
    let answer = Number.MIN_SAFE_INTEGER;
    let t_line = [];
    let cnt = 0;
    for (let x of times) {
        t_line.push([x[0], 's']);
        t_line.push([x[1], 'e']);
    }
    t_line.sort((a,b)=>{
       if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
       else return a[0] - b[0];
    });
    console.log(t_line);
    for (let x of t_line) {
        if (x[1] ==='s') cnt++;
        else cnt--;
        answer = Math.max(answer, cnt);
    }
    return answer;
}

let arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));