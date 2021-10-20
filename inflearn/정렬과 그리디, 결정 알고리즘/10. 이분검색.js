//이분검색은 무조건 정렬 되어있어야..
//lt , rt 두개가 필요. 
//mid = Math.floor((lt+rt)/2) 검색범위 줄이기. 한번 비교때마다 순회할 범위가 /2. 시간복잡도= log2 의 n승 




function solution(target,arr){
    let answer;
    arr.sort((a,b)=>a-b);
    let lt=0, rt=arr.length-1;
    while(lt<=rt){
        let mid =parseInt((lt+rt)/2)
        if(arr[mid]===target){
            answer=mid+1;
            break;
        }
        else if(arr[mid]>target) rt=mid-1
        else lt=mid+1;
    }

    return answer;

}

let arr= [23,87.65,12,57,32,99,81];
console.log(solution(32,arr))