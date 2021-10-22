//재귀함수와 스택프레임

function solution(){
    function DFS(L){
        if(L===0) return;
        else{
            console.log(L)
            DFS(L-1);
        }
        
    }

    DFS(n)
}

//출력값은 1,2,3 왜냐하면 스택에 쌓이는 것이 DFS(1)> DFS(2)> DFS(3) 이기 때문
