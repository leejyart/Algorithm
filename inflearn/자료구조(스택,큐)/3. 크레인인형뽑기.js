function solution(board, moves){
    let answer=0;
    let stack=[];
    moves.forEach(pos => {
        for(let i=0; i<board.length; i++){
            //인형을 만났을 떄 
            if(board[i][pos-1]!==0){
                let tmp=board[i][pos-1];
                //인형 꺼낸 후에는 0으로 만들어 준다. 
                board[i][pos-1]=0;
                if(tmp===stack[stack.length-1]){
                    stack.pop();
                    answer+=2;
                }
                else stack.push(tmp);
                //break로 안끊어주면 계속 돈다... 멈춰!  
                break;
            }
        }
    });
                    
    return answer;
}

let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));