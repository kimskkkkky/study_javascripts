// if(){
// }else if(){
// }else{
// }

let first = 1;
let second = 4;

if(first < 10){
    console.log("Mano");
}else if(first > second){
    console.log(`${first} > ${second}`);
}else{
    console.log(`second : ${second}`);
}
 // == (값이 같은지 물어볼때) VS === (값과 변수 타입까지 같은지 물어볼때)

 let third = `4`;
  first = 4;

// third == first
// true
// third === first
// false

// 삼항 연산자
//if(){
// }else {
// }
// 변수 = () ? : ;
let result = (third === first) ? `true` : `false` ;
