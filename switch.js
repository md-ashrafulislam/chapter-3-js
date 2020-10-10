/* let date = new Date()

//0-sunday,1-monday, 2-tuesday...

let today = date.getDay()

switch (today){
    case 0:
        console.log('Today is Sunday')
        break
    case 1:
         console.log('Today is Monday')
         break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5:
        console.log('Today is Friday')
        break
    case 6:
        console.log('Today is Saturday')
        break
    default: console.log('Not a valid number')
} */

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
/* 
    let a = +prompt("a?", "");
    lable: switch (a) {
        case 0:
        alert(0);
        break;
        case 1:
        alert(1);
        break;
        case 2:
        case 3:
        alert("2,3");
        break;
        
        default:
        break lable;
        } */
/* 
        "use strict";
let num = 10;
nextPrime: for (let i = 2; i <= num; i++) {
for (let j = 2; j < i; j++) {
if (i % j == 0) continue nextPrime;
}
switch (i) {
case 3:
alert("🙂");
break;
case 5:
alert("😄");
break;
case 7:
alert("😂");
break;
}
} */