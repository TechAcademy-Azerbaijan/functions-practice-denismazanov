function fibonacci(num){
  let a = 0; // 0 1 2 3 4 5 6  7 8 
  let b = 1; // 0 1 1 2 3 5 8 13 21
  for(let i = 0;i<num;i++){
    let c = a+b;
    a = b;
    b = c; 
  }
  return a
}
console.log(fibonacci(6))
