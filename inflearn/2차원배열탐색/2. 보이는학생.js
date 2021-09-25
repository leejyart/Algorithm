 // N(1<=N<=1000)명의 학생을 일렬로 세웠다. 일렬로 서있는 학생의 키가 앞에서부터 순서대로 주어질때,
 //맨앞에 서있는 선생님이 볼 수 있는 학생의 수는? 


 // 앞에있는 사람보다 크면 보이고, 작거나 같으면 안보임. 


 //이중 for 문 시, O(n제곱) => 시간복잡도 증가 
 
            function solution(arr){      
                //첫번째 사람은 무조건 보임. 이 사람의 키를 max로 초기세팅 .   
                let answer=1, max=arr[0];
                for(let i=1; i<arr.length; i++){
                    if(arr[i]>max){
                        answer++;
                        max=arr[i];
                    }
                }
                return answer;
            }

            let arr=[130, 135, 148, 140, 145, 150, 150, 153];
            console.log(solution(arr));
  