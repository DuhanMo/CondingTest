function solution(str){
    let answer="YES";
    // 정규표현식으로서 알파벳이 아닌것을 찾아라 글로벌영역에서
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    if(str !== str.split('').reverse().join('')) return "NO";

    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));