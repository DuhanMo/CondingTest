function solution(array) {
    let answer = Array.from({length:array.length},()=>-1);
    let max = Number.MIN_SAFE_INTEGER;
    let d = 0;
    for (let i = 0; i < array.length; i++) {
        let minDis = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[j] > array[i]) {
                d = Math.abs(j - i);
                if(d < minDis) {
                    minDis = d;
                    answer[i] = j;
                }
            }

        }
    }
    return answer;
}

array = [3, 5, 4, 1, 2];
console.log(solution(array));
console.log(Math.abs(-1));