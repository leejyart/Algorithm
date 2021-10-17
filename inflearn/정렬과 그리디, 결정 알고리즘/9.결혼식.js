function solution(times){
    let answer=Number.MIN_SAFE_INTEGER;
    let T_line=[];
    for(let x of times){
        //시작 시간과 끝시작을 기록한다. 각각 하나의 배열로 만들어 빈 arr에 넣어준다. 
        T_line.push([x[0], 's']);
        T_line.push([x[1], 'e']);
    }
    T_line.sort((a, b)=>{
        //이부분은 문자임! askii num 으로 정렬됨 
        if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
        else return a[0]-b[0];
    });
    let cnt=0;
    for(let x of T_line){
        if(x[1]==='s') cnt++;
        else cnt--;

        //값은 원래 값과 cnt 중에 큰것으로 계속 갱신한다. 
        answer=Math.max(answer, cnt);
    }
    return answer;
}
let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));