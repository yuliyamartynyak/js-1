
const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));

const result = solveQuardEq(a, b, c);
alert(result);

function solveQuardEq(a, b, c) {
    const diskr = calcDisk(a, b, c);
    if(diskr > 0) {
      let x1 = (-b + Math.sqrt(diskr))/(2*a);
      let x2 = (-b - Math.sqrt(diskr))/(2*a);
      return x1, x2;
    } else if (diskr === 0) {
        let x = - (b / (2*a));
        return x;
    } else if (diskr < 0) {
        let x = null;
        return x;
            
        }
}

function calcDisk(a, b, c) {
return b*b - 4*a*c;    
}













//let greetings = 10+15;
//alert(greetings);

//const name = prompt('Enter your name');
//const msg = 'Hello, ' + name;
//alert(msg);

//const age = +prompt ('Enter your age');
//const newAge = age + 1;
//alert(newAge);

//const age = parseInt(prompt('Enter your age'));
//const newAge = age + 1;
//alert('You are ' + checkAge(age));


//function add(a, b, c) {
  //  const res = a + b + c;
    //return res;
//}

//const total = add(2, 2, 5);
//alert(total);

//function checkAge(age) {
  //  if(age <= 18) {
    //    return 'child';
    //} else {
     //   return 'adult';
    //}
//}










