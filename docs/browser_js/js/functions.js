function calculateSumFirst(first, second){
    return first + second
}

let third = calculateSumFirst(4, 6);

let calculateMinusSecond = (first, second) => {
    return first - second;
}



// calculateMinusSecond(2,1)
// 1

// calculateMinusSecond
// (first, second) => {
//     return first - second;
// }

// let calculateThird = calculateMinusSecond
// undefined

// calculateThird
// (first, second) => {
//     return first - second;
// }

//callback function
function calculateForth(funcName, param1, param2){
    let result = funcName(param1, param2);
    result = result + 10;
    return result
}

// calculateForth
// ƒ calculateForth(funcName, param1, param2){
//     let result = funcName(param1, param2);
//     result = result + 10;
//     return result
// }
// calculateForth(calculateSumFirst, 5,2)
// 17

// "carTableBody"라는 id를 가진 DOM 요소를 찾아서 동적으로 생성된 HTML을 추가
let carTableBody = document.querySelector('#carTableBody'); // list.html에서 이 id 넣음 <tbody id="carTableBody"> 
carTableBody.innerHTML = outHtml; //outHtml 변수에 저장된 동적으로 생성된 HTML이 선택된 <tbody> 요소의 내부 HTML로 할당됨