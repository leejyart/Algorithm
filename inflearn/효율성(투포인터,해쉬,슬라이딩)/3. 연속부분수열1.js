function solution(m, arr){
    let answer=0, lt=0, sum=0;
    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt];
        //오른쪽의 값을 1개 더해준다. 
        //더한 값이 목표 값과 같으면 정답을 +1 해준다. 
        if(sum===m) answer++;
        while(sum>=m){
            //오른쪽에서 1개 숫자를 빼준다. 
            sum-=arr[lt++];
            // 그 후에 다시 sum이 목표값과 같은지 검증한다. 같을경우 answer을 +1 한다. 
            if(sum===m) answer++;       
        }
    }        
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));