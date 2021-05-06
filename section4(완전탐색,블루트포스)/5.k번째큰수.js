// 하드코딩
function solution(n, k, card){
    let answer = Number.MAX_SAFE_INTEGER;
    let result = [];
    let sum = 0;
    let cnt= 0;
    for (let i = 0; i < card.length; i++) {
        for (let j = 0; j < card.length; j++) {
            for (let s = 0; s < card.length; s++) {
                if (i!==j && j!==s && s!==i ) {
                    sum = card[i] + card[j] + card[s];
                    result.push(sum);
                }
            }
        }
    }
    result.sort((a, b)=>a-b).reverse();
    for (let i = 0; i < result.length; i++) {
        if(result[i] < answer) {
            answer = result[i];
            cnt++;
        }
        if (cnt === k) return answer;
    }
    return answer;
}
// Set 이용
function solution2(n, k, card){
    let answer = Number.MAX_SAFE_INTEGER;
    let tmp = new Set();
    for (let i = 0; i < card.length; i++) {
        for (let j = i+1; j < card.length; j++) {
            for (let s = j+1; s < card.length; s++) {
                   tmp.add(card[i]+card[j]+card[s]);
            }
        }
    }
    let a = Array.from(tmp).sort((a,b)=>a-b);
    answer = a[a.length-k];
    return answer;
}
let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
console.log(solution2(10, 3, arr));