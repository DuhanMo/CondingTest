function solution(str){
    let answer=0;
    for (let x of str) {
        if(x === x.toUpperCase()) answer++;
    }

    return answer;
}
function solution2(str){
    let answer=0;
    for (let strElement of str) {
        let num = strElement.charCodeAt();
        if(num >= 65 && num <=90) answer++;
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));
console.log(solution2(str));