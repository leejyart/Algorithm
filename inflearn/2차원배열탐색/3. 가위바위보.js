


//a, b 두사람이 가위 바위 보를 합니다. 총 N 번 게임을 하여 a 가이기면 a, 
//b가 이기면 b를 출력합니다. 비길경우에는 d 를 출력합니다. 
//1: 가위, 2: 바위, 3: 보 


// 1 3
// 2 1
// 3 2 


//해설 
function solution(a, b){         
    let answer="";
    for(let i=0; i<a.length; i++){
        if(a[i]===b[i]) answer+="D ";
        else if(a[i]===1 && b[i]===3) answer+="A ";
        else if(a[i]===2 && b[i]===1) answer+="A ";
        //answer = answer + "A " 보다 연산이 덜 듬. 
        else if(a[i]===3 && b[i]===2) answer+="A ";
        else answer+="B ";
    }
    
    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];

console.log(solution(a, b));



//my solution
function solution(a, b){         
// let answer="";
const arr=[]

for(let i; i<a.length; i++){
if(a[i]==b[i] ){arr.push("D ")} 
if(a[i]===1 && b[i]===3 || a[i]===2 && b[i]===1 || a[i]===3 && b[i]===2)
{arr.push("A ")}
else{arr.push("B ")}
}

return arr.join()[0] }


//sol 3. 이기는 case 를 obj 로 만들기 