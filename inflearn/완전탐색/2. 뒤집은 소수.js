
//소수판별 식 
function isPrime(num){
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}
function solution(arr){
    let answer=[];


    for(let x of arr){

//문자열로 변경한 후  숫자로 바꾸기 
/*
let res = Number(x.toString().split("").reverse().join(""));
*/
        let res=0;
        while(x){
            let t=x%10;
            res=res*10+t;
            x=parseInt(x/10);
        }
        if(isPrime(res)) answer.push(res);
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));