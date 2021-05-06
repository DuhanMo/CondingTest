function solution(test){
    let answer=0;
    let testCount = test.length;
    let studentCount = test[0].length;

    for (let i = 1; i <= studentCount; i++) {
        for (let j = 1; j <=studentCount; j++) {
            // 세번의 테스트 케이스를 다 통과하면 answer++
            let cnt = 0;
            for (let k = 0; k < testCount; k++) {
                // 멘토와 멘티의 등수 초기화
                let gi = 0;
                let gj = 0;
                for (let l = 0; l < studentCount; l++) {
                    if (test[k][l] === i) gi = l;
                    if (test[k][l] === j) gj = l;
                }
                if (gi < gj) cnt++;
            }
            if(cnt === testCount) answer++;
        }

    }
    
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));