function solution(arr){
    let answer=arr;
    for(let i=0; i<arr.length; i++){
        //j undefined 안나오도록 먼저 선언해주기
        let tmp=arr[i], j;
        for(j=i-1; j>=0; j--){
            // i-1 부터 0까지의 숫자중에, arr[i] 보다 큰 수가 존재하면  j를
            if(arr[j]>tmp) arr[j+1]=arr[j];
            else break;
        }
        // 마지막이거나 break 할때, j 의 다음에다가 복붙. 
        arr[j+1]=tmp;
    } 
    return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));