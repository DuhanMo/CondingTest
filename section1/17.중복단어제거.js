function solution(str){
    let answer;

    answer = str.filter((v,i) => {
        if(str.indexOf(v) === i) return v;
    });
    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));