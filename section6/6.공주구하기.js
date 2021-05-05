
function solution(n, k){
    let answer;
    let queue = Array.from({length : n}, (v, i)=> v = i + 1);

    while (queue.length) {
        for (let i = 0; i < k-1; i++) {
            queue.push(queue.shift());
        }queue.shift();
        if (queue.length === 1) answer = queue[0];
    }

    return answer;
}

console.log(solution(8, 2));