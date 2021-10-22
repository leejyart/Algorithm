//재귀는 if , else 스택과 트리를 그리면서 이해하기 

function sol(v){
    let answer;
    function DFS(v){
        if(v>7) return
        else{
            //전위순회 console.log(v);
            DFS(v*2);
            //중위순회 console.log(v);
            DFS(v*2+1);
            //후위순회 console.log(v);
        }
    }

    DFS(v);
    return answer;
}

console.log(sol(1))