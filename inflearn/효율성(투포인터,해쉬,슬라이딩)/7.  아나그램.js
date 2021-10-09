function solution(str1, str2){
                let answer="YES"; 
                let sH = new Map();
                for(let x of str1){
                    if(sH.has(x)) sH.set(x, sH.get(x)+1);
                    else sH.set(x, 1);
                }
                for(let x of str2){
                    // 알파벳이 하나라도 일치하지 않거나, 비교군 보다 알파벳의 갯수가 부족한 경우.. 아나그램이 성립하지 않는다. 
                    if(!sH.has(x) || sH.get(x)==0) return "NO";
                    sH.set(x, sH.get(x)-1);
                }
                return answer;
            }
            
            let a="AbaAeCe";
            let b="baeeACA";
            console.log(solution(a, b));