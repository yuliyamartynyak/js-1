const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));

const result = solveQuardEq(a, b, c);
alert(result);

function solveQuardEq(a, b, c) {
    const diskr = calcDisk(a, b, c);
    if(diskr > 0) {
      const x1 = (-b + Math.sqrt(diskr))/(2*a);
      const x2 = (-b - Math.sqrt(diskr))/(2*a);
      return 'x1 ' + x1 + 'x2 ' + x2;
    } else if (diskr === 0) {
        const x = - (b / (2*a));
        return x;
    }
    return 'no result'
    }
function calcDisk(a, b, c) {
return b*b - 4*a*c;    
}