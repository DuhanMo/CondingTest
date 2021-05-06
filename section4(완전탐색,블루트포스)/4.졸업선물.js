function solution(m, product){
    let answer=0;
    // 정렬
    product.sort((a, b)=>(a[0]+a[1]) - (b[0]+b[1]));
    // product 만큼
    for (let i = 0; i < product.length; i++) {
        let cnt = 0;
        let money = m - (product[i][0] / 2 + product[i][1]);
        cnt ++;
        // /2를 뺀 나머지다 더해보기
        for (let j = 0; j < product.length; j++) {
            if(j!==i && (product[j][0] + product[j][1]) > money) break;
            if (j!==i && (product[j][0] + product[j][1]) <= money) {
                money -= product[j][0] + product[j][1];
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
}
//
// let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
// console.log(solution(28, arr));

function solution2(m, product){
    let answer=0;
    product.sort((a,b)=>(a[0]+a[1])-(b[0]+b[1]));
    for (let i = 0; i <product.length; i++) {
        let money = m - (product[i][0]/2 + product[i][1]);
        let cnt = 1;
        for (let j = 0; j < product.length; j++) {
            if((product[j][0]+product[j][1]) > money) break;
            if(i!==j && money >= (product[j][0]+product[j][1])){
                money -= product[j][0]+product[j][1];
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);

    }
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution2(28, arr));