
let name4 = prompt("ماذا نحب ان نطلب؟");
if (name4 == 1)
{
console.log( "بيتزا");
} else if (name4 == 2){
console.log( "برجر");
} else if (name4 == 3) {
console.log( "باستا");
} else 
{
console.log("طبقك غير متوفر حالياً")
};
// switch(name6) {
//     case 1:
//       break;
//     case 2:
//       break;
//     case 3:
//       break;
//     case 4:
//         break;
          
//   }
let number1 = prompt("أدخل الرقم الاول");
let number2 = prompt("أدخل الرقم الثاني");
let type = prompt("أدخل العملية (+ - / *)");

let x = parseInt(number1);
let y = parseInt(number2);

let answer = null;

if (x && y){
if (type == "+"){
    answer = x + y
    console.log(answer);
} else if (type == "-"){
    answer = x - y
    console.log(answer);

} else if (type == "/"){
     answer = x / y
    console.log(answer);

}else if (type == "*"){
   answer = x * y
   console.log(answer);

}
else {
    console.log("  رسالة تحذيريةهناك خطاأ ")
}
} else {
    console.log("  رسالة تحذيريةهناك خطاأ ")
}




// let age = prompt("أدخل عمرك");


 let age = 16;
 console.log(age);


 if(age >=4 && age <=6){
     console.log("انت في الروضه");
 }else if(  age <=7 && age<= 18) {
 console.log("انتي في المدرسة");
} else if  ( age<= 18 && age <= 26){
    console.log("انت في الجامعة");
} else{
    console.log(" انت لا تستوفي الشروط ")
}