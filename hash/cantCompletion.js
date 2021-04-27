function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

participant = ["leo", "kiki", "eden"];
completion = ["eden", "kiki"];

console.log(solution(participant, completion));
