function solution(arr){
    let answer=[];
    //깊은 복사 
    let sortArr=arr.slice();
    //오름차순으로 정렬해서 비교. 
    sortArr.sort((a, b)=>a-b);
    for(let i=0; i<arr.length; i++){
        //번호를 뽑는 것 주의..
        if(arr[i]!==sortArr[i]) answer.push(i+1);
    }
    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));