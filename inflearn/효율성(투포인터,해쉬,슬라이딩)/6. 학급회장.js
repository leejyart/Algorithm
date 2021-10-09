function solution(s){  
    let answer;
    //map 자료형은 has 와 set, get 메소드를 가지고있다. 
    let sH = new Map();
    for(let x of s){
        //x가 key 로 있으면, x 의값에 +1, 없으면 +1 을 세팅. 
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    let max=Number.MIN_SAFE_INTEGER;
    for(let [key, val] of sH){
        if(val>max){
            max=val;
            answer=key;
        }
    }
    //가장 val 이 큰 key 를 리턴한다. 
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));