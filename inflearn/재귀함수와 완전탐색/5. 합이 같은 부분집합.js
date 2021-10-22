function sol(arr){
    let answer;
    function DFS(L,sum){
        let answer ="NO",flag=0;
        let total = arr.reduce((a,b)=>a+b,0);
        let n =arr.length;
        function DFS(L,sum){
            //python 은 프로그램 자체를 종료하는 exit 이 있음. 왠만하면 쓰지말기.
            //스택에 남아있는애들도 다 종료 시키기.
            if(flag) return;
            if(L===n){
                if((total-sum)===sum)
                {answer="YES";
                flag=1;}
            }
            else{
                DFS(L+1,sum+arr[L]);
                DFS(L+1,sum);
            }
        }
        DFS(0,0)
        return answer;
    }


}