function solution(need, plan){
    let answer="YES";
    let queue = [];
    for (let x of need) {
        queue.push(x);
    }
    for (let x of plan) {
        if(queue.includes(x)){
            if (queue.shift() !== x) return "NO";
        }
    }
    if (queue.length > 0) return "NO";
    return answer;
}

let a="CBA";
let b="CDBGE";
console.log(solution(a, b));