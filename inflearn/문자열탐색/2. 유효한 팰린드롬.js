function solution(s){
    let answer="YES";

    //정규식의 활용이  포인트, 펠린드롬 자체는 1번과 같은 방식.  
    s=s.toLowerCase().replace(/[^a-z]/g, '');
    if(s.split('').reverse().join('')!==s) return "NO";
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));