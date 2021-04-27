function solution(str){
    let answer;
    let mid = Math.floor(str.length / 2);
    if (str.length % 2 === 1) {
        return str.substr(mid,1);
    }else return str.substr(mid-1,2);
}
console.log(solution("studyd"));