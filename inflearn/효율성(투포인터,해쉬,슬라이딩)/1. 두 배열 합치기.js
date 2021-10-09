function solution(arr1, arr2){
    let answer=[];
    let n=arr1.length;
    let m=arr2.length;
    let p1=p2=0;
    // 투포인터로 두 배열을 동시에 순회한다. 
    while(p1<n && p2<m){
        // 후위연산자는, 먼저 answer에 push 한 이후에 포인터를 한칸 앞으로 이동시킨다. 
        if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]);
        else answer.push(arr2[p2++]);
    }
    //p1이 남거나, p2가 남는 경우 .. 각각 
    while(p1<n) answer.push(arr1[p1++]);
    while(p2<m) answer.push(arr2[p2++]); 
    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));