function solution(s){  
    let answer;
    let stack=[];
    for(let x of s){
        if(x===')'){
            //닫는 괄호가 아닌 것, 즉 알파벳을 남기고 괄호를 지운다. 
            //while 은  if 와달리 실제 pop이 실행됨. 
            while(stack.pop()!=='(');
        }
        else stack.push(x);
    }
    answer=stack.join('');
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));