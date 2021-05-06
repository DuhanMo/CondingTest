function solution(s) {
    let answer;
    let stack = [];

    for (let x of s) {
        if (x === ")") {
            while (stack.pop() !== "(") ;
        }else stack.push(x);
    }
    answer = stack.join('');
    return answer;
}

let str = "(A(BC)D)EFc(d3)12(G(H)(IJ)K)LM(N)";
console.log(solution(str));