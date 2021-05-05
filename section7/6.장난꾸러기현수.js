
function solution(arr){
    let answer=[];
    let tmp = Array.from(arr).sort();
    arr.forEach((v,i)=>{
        if (tmp[i] !== v) answer.push(i+1);
    })
    return answer;
}

let arr=[120,130, 150, 150, 130, 150];
console.log(solution(arr));