function solution(s){
                let answer="YES";
                stack=[];
                for(let x of s){
                    if(x==='(') stack.push(x);
                    else{
                        // 만약 stack의 짝이 없으면 no, 있으면 하나씩 지운다. 
                        if(stack.length===0) return "NO";
                        stack.pop();
                    }
                }
                //스택을 모두 순회한 후 여전히 괄호가 남아있다면, 짝이 안맞는것. 그렇기 때문에 no 
                if(stack.length>0) return "NO";  
                return answer;
            }
            
            let a="(()(()))(()";
            console.log(solution(a));