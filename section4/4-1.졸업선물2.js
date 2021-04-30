// 졸업선물 문제와 같은데 쿠폰이 없다고 가정.

function solution(m, product) {
    let answer = 0;
    let n = product.length;
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
    console.log(product);
    for (let i = 0; i < n; i++) {
        let cnt=0;
            let money = m - (product[i][0]+product[i][1]);
            cnt++;
        for (let j = 0; j < n; j++) {
            if(j!==i && (product[j][0] + product[j][1]) > money) break;
            if(j!==i && (product[j][0] + product[j][1]) <= money){
                money -= (product[j][0] + product[j][1]);
                cnt++
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
}

let arr = [[10, 6], [2, 2], [4, 3], [4, 5], [3, 3]];
console.log(solution(500, arr));