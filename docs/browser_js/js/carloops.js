// string - String
// 숫자 - Number
// ArrayList = Array
// HashMap = Object

// let animals = ["dog", "cat", "bird", "fish", "lizard"];

// console.log(`done`);

// for (let i =0; i<animals.length; i = i+1){
//     console.log(`${i+1} : ${animals[i]}`);
// }

// // for (String animal : animals)
// for(let animal of animals){
//     console.log(`${animal}`);
// }

const cars_obj = [
{YEAR:"2020",CAR_NAME:"소나타",CAR_INFOR_ID:"CI001",COMPANY_ID:"C001"},
{YEAR:"2021",CAR_NAME:"코나",CAR_INFOR_ID:"CI002",COMPANY_ID:"C002"},
{YEAR:"2019",CAR_NAME:"SM6",CAR_INFOR_ID:"CI003",COMPANY_ID:"C003"},
{YEAR:"2022",CAR_NAME:"3 시리즈",CAR_INFOR_ID:"CI004",COMPANY_ID:"C004"},
{YEAR:"2020",CAR_NAME:"캠리",CAR_INFOR_ID:"CI005",COMPANY_ID:"C005"}
];

  let outHtml = ``;
  for(let car_hashmap of cars_obj){
    console.log(`YEAR : ${car_hashmap.YEAR}, 
    CAR_NAME: ${car_hashmap[`CAR_NAME`]} , CAR_INFOR_ID : ${car_hashmap.CAR_INFOR_ID}, COMPANY_ID : ${car_hashmap.COMPANY_ID},`);
    outHtml = `${outHtml}<tr><td> ${car_hashmap.YEAR}</td> <td>  ${car_hashmap[`CAR_NAME`]}</td> <td> ${car_hashmap.CAR_INFOR_ID}</td> <td> ${car_hashmap.COMPANY_ID}</td></tr>`
}
console.log(outHtml);

// browser 자원중에 docs
let loops_source = document.querySelector('#carloops');

//loops_source
//<div id = "loops">inner text</div>
loops_source.innerHTML = outHtml