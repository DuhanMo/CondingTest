function solution(str){
    let answer="";
    str = str.replace(/[A-z]/g, '');

    return parseInt(str);
}

function solution2(str){
    let answer="";
    for (let x of str) {
        if (!isNaN(x)) {
            answer+=x;
        }
    }
    return parseInt(answer);
}


let str="0000g0en2T0s8eSoft32132131";
console.log(solution(str));
console.log(solution2(str));