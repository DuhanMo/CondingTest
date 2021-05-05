function solution(size, arr){
    let answer = Array.from({length:size}, ()=>0);

    arr.forEach((v,i)=>{
        let pos = -1;
        for (let j = 0; j < answer.length; j++) {
            if (answer[j] === v) pos = j
        }
        if(pos !== -1) answer.slice(pos,1);
        else answer.unshift(v);
        if(answer.length > size) answer.pop();
    });

    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));