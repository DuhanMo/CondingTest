function solution(str){
    let answer="";
    for (let i = 0; i < str.length; i++) {
        // 발견된 문자의 인덱스가 최초 발견 인덱스라면 answer 에 추가
        if (str.indexOf(str[i]) === i) {
            answer += str[i];
        }
    }
    return answer;
}
console.log(solution("ksekkset"));