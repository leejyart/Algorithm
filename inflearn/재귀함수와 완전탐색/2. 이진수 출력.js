function sol(n){
    //string 으로 해두면 문자열로 쌓임..! 
    let answer="";
    function DFS(){
        if(n===0) return;
        else{
            //1. console.log(n%2)=> 요기에 하면 원하는 순서대로 안나옴
            DFS(parseInt(n/2))
            answer+=(n%2)
            //2. console.log(n%2)=> 호출 아래에 써주면 된다. 
        }
    }

    DFS(n);
    return answer;
}