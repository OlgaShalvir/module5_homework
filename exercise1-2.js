//  1
let result = +prompt("Please enter a number for exercise 1", '');

if ((typeof(result) === 'number') && (!isNaN(result))) { 
 if (result % 2 === 0) {
  console.log('число четное')
}
 else {
  console.log ('число нечетное')
}
} else {
  console.log('Упс, кажется, вы ошиблись');
}

// 2
 let x;
x = false;
x = "Olga";
x = 3;
switch (typeof(x)) {
  case "number":
    console.log( `${x} is number`)
    break;
    case "string":
      console.log( `${x} is string` )
    break;
    case "boolean":
      console.log( `${x} is boolean` )
    break;
  default: console.log(`Тип ${x} не определён`)
    break;
}
