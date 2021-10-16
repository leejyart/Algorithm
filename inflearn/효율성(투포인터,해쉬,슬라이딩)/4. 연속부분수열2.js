 function solution(m, arr){
                let answer=0, sum=0, lt=0;
                for(let rt=0; rt<arr.length; rt++){
                    sum+=arr[rt];
                    //원소를 모두 더한값이 목표값보다 클 때만, 왼쪽의 값을 하나 빼준다. 
                    while(sum>m){
                        sum-=arr[lt++];
                    }
                    //끝에서 부터 계산한다. 1, 2,... n 개 를 더해줌. 
                    answer+=(rt-lt+1);
                }               
                return answer;
            }
            
            let a=[1, 3, 1, 2, 3];
            console.log(solution(5, a));