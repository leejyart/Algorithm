//필수과목이 꼭 들어가도록.. 

function solution(need, plan){
    let answer="YES";
    // 배열 형태로 만들기. 큐도 배열임. 
    let queue=need.split('');
    for(let x of plan){
        //만약 큐에 들어있는 알파벳이라면 
        if(queue.includes(x)){
            //큐를 순차적으로 순회하며, 순서가 맞게 배치됐는지 확인. 
            if(x!==queue.shift()) return "NO";
        }
    }
    //for문을 다돌고도 queue에 남아있으면 false
    if(queue.length>0) return "NO";  
    return answer;
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));