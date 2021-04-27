function solution(str, t){
    let answer=0;
    for (const strElement of str) {
        if (strElement === t)answer++;
    }
    return answer;
}

function solution2(str, t){
    let answer=str.split(t).length-1;
    return answer;
}
let str="COMPUTERPROGRAMMINGr";
console.log(solution(str, 'R'));
console.log(solution2(str, 'R'));