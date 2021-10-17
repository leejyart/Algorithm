function solution(meeting){
    let answer=0;
    meeting.sort((a, b)=>{
        // 먼저 끝나는 시간 기준으로 정렬... 끝나는 시간 이 같으면 시작하는 시간이 빠른것을 앞으로 정렬. 
        if(a[1]===b[1]) return a[0]-b[0];
        else return a[1]-b[1];
    })
    let et=0;
    for(let x of meeting){
        //끝나는 시간이  같거나 더 큰 경우.. 
        if(x[0]>=et){
            answer++;
            et=x[1];
        }
    }
    return answer;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));