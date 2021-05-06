function isPrime(num) {
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}

function solution(arr) {
    let answer = [];
    for (let x of arr) {
        let reverse = parseInt(x.toString().split('').reverse().join(''));
        if(isPrime(reverse)) answer.push(reverse)
    }
    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));