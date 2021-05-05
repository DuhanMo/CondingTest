function solution(meeting){
    let answer=0;
    let max = Number.MIN_SAFE_INTEGER;
    meeting.sort((a, b)=>{
        if(a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    let et = 0;
    let st = 0;
    meeting.forEach((v, i)=>{
        if(v[0] >= et ) {
            et = v[1];
            answer++;
        }
    })


    return answer;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
let arr=[[3, 3], [2, 3], [1, 3]];
console.log(solution(arr));