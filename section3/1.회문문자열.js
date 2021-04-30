function solution(str){
    let answer="YES";
    let result = [];
    for (let i = str.length-1; i >= 0 ; i--) {
       result.push(str[i].toUpperCase());
    }
    if (str.toUpperCase() !== result.join("")) answer = "NO";
    return answer;
}


function solution2(str) {
    let answer = "YSE";
    str = str.toLowerCase();
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return "NO";
        }
    }
    return answer;

}

function solution3(str) {
    let answer = "YES";
    str = str.toLowerCase();
    // reverse()는 배열만 가능하기때문에 split으로 배열화 시키고 join으로 다시 합침
    if (str.split('').reverse().join('') !== str) return "NO";
    return answer;
}


let str="GGGGooooGGGG";
console.log(solution(str));
console.log(solution2(str));
console.log(solution3(str));