function cost(num){
  let a = num - parseInt(num%100);
  let b = num%100 - (num%10);
  let c = num % 10;
  let result  = a*1 + b*1.5 + c*2;
  return result
}
let a = 245;
console.log(cost(a))
