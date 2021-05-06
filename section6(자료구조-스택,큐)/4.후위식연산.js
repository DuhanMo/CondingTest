
function solution(s){
    let answer;
    let stack = [];
    for (let x of s) {
        if(!isNaN(x)) stack.push(x);
        else {
            let rt = parseInt(stack.pop());
            let lt = parseInt(stack.pop());
            console.log(lt, x, rt);
            if(x === '+') stack.push(lt + rt);
            else if (x === '-') stack.push(lt - rt);
            else if (x === '*') stack.push(lt * rt);
            else if (x === '/') stack.push(lt / rt);
        }
    }
    answer = stack[0];
    return answer;
}

let str="352+*9-";
console.log(solution(str));