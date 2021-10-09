function solution(m, product){
    let answer=0;
    let n=product.length;
    // 제품의 가격 + 운송비를 합친 가격이 작은것 부터 큰것 순으로 정렬한다. 
    // 정렬을 하는 이유? => 순차적으로 값을 계산해갈 때 앞에서  금액이 부족하면 뒤 까지 순회하지 않아도 됨. (break)

    //sort 사용법: 콜백함수를 인자로 전달. 
    product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
    for(let i=0; i<n; i++){
        //할인가 
        let money=m-(product[i][0]/2+product[i][1]);
        let cnt=1;
        for(let j=0; j<n; j++){
            //남은 돈으로 해당 차수의 상품을 사지 못한다면, 뒤에까지 순회할 필요가 없으므로 멈춘다. 
            if(j!==i && (product[j][0]+product[j][1])>money) break;
            if(j!==i && (product[j][0]+product[j][1])<=money){
                money-=(product[j][0]+product[j][1]);
                cnt++;
            }
        }
        answer=Math.max(answer, cnt);
    }  
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));