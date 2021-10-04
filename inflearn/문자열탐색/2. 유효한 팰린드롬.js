function solution(s){
    let answer="YES";

    //정규식의 활용이  포인트, 펠린드롬 자체는 1번과 같은 방식.  

    //정규표현식 : Ex. 유효한 차량 번호인가? 검색관련쪽.. (프,백 둘다!)
    //input 으로 정보를 받는 때. => 나중에 여유있으면 공부   
    s=s.toLowerCase().replace(/[^a-z]/g, '');
    if(s.split('').reverse().join('')!==s) return "NO";
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));