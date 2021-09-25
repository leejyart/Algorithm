
//중앙을 기준으로 대치되는모습. 하나라도 다르면 펠린드롬이 아님. 
function solution(s){
    let answer="YES";
    s=s.toLowerCase();
    let len=s.length;
    for(let i=0; i<Math.floor(len/2); i++){
        if(s[i]!=s[len-i-1]) return "NO";
    }
    return answer;
}

let str="goooG";
console.log(solution(str));


//sol ver.2, 문자열을 쪼개서 붙인후 하나의 string으로 재조합. 원본과의 일치여부로 t/f 판단 
function solution(s){
    let answer="YES";
    s=s.toLowerCase();

    if(s.split("").reverse().join("")!== s)
    return "NO"
    return answer;
}

let str="goooG";
console.log(solution(str));
