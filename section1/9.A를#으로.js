function solution(str){
    let answer="";
    for (let x of str) {
        if (x === "A") {
            x = "#";
        }
        answer+=x;
    }
    return answer;
}


function solution2(str) {
    let answer;
    answer = str.replace(/A/g, "@");
    return answer;
}


let str="BANANA";
console.log(solution(str));
console.log(solution2(str));