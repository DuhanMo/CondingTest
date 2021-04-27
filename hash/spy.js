function solution(clothes) {
  var answer = 0;

  const result = clothes.reduce((a, c) => {
    a[c[1]] = a[c[1]] ? a[c[1]] + 1 : 1;
    console.log(c[1]);
    console.log(a[c[1]]);
    return a;
  }, {});
  const mul = Object.values(result);
  for (const iterator of mul) {
  }
  console.log(result);
  console.log(mul);
  return answer;
}

clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
solution(clothes);
