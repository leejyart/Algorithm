function solution(s){  
    let answer;
    let stack=[];
    for(let x of s){
        //숫자면, stack에 쌓기. 
        if(!isNaN(x)) stack.push(Number(x));
        else{
            let rt=stack.pop();
            let lt=stack.pop();
            if(x==='+') stack.push(lt+rt);
            else if(x==='-') stack.push(lt-rt);
            else if(x==='*') stack.push(lt*rt);
            else if(x==='/') stack.push(lt/rt);
        }
    }
    answer=stack[0];
    return answer;
}

let str="352+*9-";
console.log(solution(str));