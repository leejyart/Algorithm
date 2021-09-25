function solution(str){
    let answer="";
    for(let x of str){
        // isNaN 의 활용. 여기서는 숫자도 string이므로, 형만 판단한 이후에 string으로 붙여나간다. 
        if(!isNaN(x)) answer+=x;
    }  
    return parseInt(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));


//숫자로 계산할 경우? 
function solution(str){
    let answer="";
    for(let x of str){
        // isNaN 의 활용. 처음부터 숫자로 형을 변경할 경우, 이전의 숫자에는 자릿수를 옮기기 위해 10을 곱한다. 
        if(!isNaN(x)) answer = answer*1+Number(x);
    }  
    return answer;
}

let str="g0en2T0s8eSoft";
console.log(solution(str));