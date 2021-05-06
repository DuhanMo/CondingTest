
function solution(c, arr){
    let answer = "";
    let n = arr.length;
    function DFS(L, sum){
        if (L===n){
            if(sum > c) return;
            if(sum <= c) answer = Math.max(answer,sum);
        }
        else {
            DFS(L+1, sum+arr[L]);
            DFS(L+1,  sum);
        }
    }
    DFS(0,0);
    return answer;
}

let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));