function solution(v) {
    let answer = [
[]
    ];
    console.log(v)
    if(v[0][0] === v[1][0]) answer[0] = v[2][0];
    else if(v[0][0] === v[2][0]) answer[0] = v[1][0];
    else if(v[1][0] === v[2][0])answer[0] = v[0][0];

    console.log(answer)
    if(v[0][1] === v[1][1]) answer[1] = v[2][1];
    else if(v[0][1] === v[2][1]) answer[1] = v[1][1];
    else if(v[1][1] === v[2][1]) answer[1] = v[0][1];

    console.log('Hello Javascript')

    return answer;
}
function solution2(v){
    let answer=[];


        if(v[0][0] === v[1][0]) answer[0] = v[2][0];
        else if(v[0][0] === v[2][0]) answer[0] = v[1][0];
        else if(v[1][0] === v[2][0]) answer[0] = v[0][0];

        if(v[0][1] === v[1][1]) answer[1] = v[2][1];
        else if(v[0][1] === v[2][1]) answer[1] = v[1][1];
        else if(v[1][1] === v[2][1]) answer[1] = v[0][1];

    return answer;
}

v = [[1, 4], [3, 4], [3, 10]];
console.log(solution(v));