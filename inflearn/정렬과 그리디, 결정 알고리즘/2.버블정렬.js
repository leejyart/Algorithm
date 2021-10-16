function solution(arr){
    let answer=arr;
    //얘도 끝까지 돌 필요는 없음. 
    for(let i=0; i<arr.length-1; i++){
        //버블정렬의 맨 마지막은.. 가장 큰 수가 밀리기 때문이다. 
        for(let j=0; j<arr.length-i-1; j++){
            // 성능상 좋지만은 않음. 
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
            }
        }   
    } 
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));