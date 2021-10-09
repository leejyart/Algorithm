 function solution(n, k, card){
                let answer;
//중복이 제거되는 자료구조
                let tmp = new Set();
                for(let i=0; i<n; i++){
                    for(let j=i+1; j<n; j++){
                        for(let k=j+1; k<n; k++){
                            tmp.add(card[i]+card[j]+card[k]);
                        }
                    }
                }
                //큰수부터 내림차순으로 정렬. set자료구조를 arr형태로 바꾼다. 
                let a=Array.from(tmp).sort((a, b)=>b-a);
                answer=a[k-1];
                return answer;
            }
            
            let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
            console.log(solution(10, 3, arr));