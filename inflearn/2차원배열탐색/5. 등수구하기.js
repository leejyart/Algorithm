function solution(arr){  
    let n=arr.length;
    let answer=Array.from({length:n}, ()=>1);
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){            
            if(arr[j]>arr[i]) 
            answer[i]++;
        }
    }             
    return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));


//my sol
function solution(arr){  
    let n=arr.length;
    let array= [];
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            let num = 1 
            if(arr[j]>arr[i]) 
            num++;
        }
        array.push(num)
    }             
    return array;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));