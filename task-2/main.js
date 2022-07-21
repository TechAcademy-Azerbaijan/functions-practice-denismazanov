function prime(a,check = true){ 
  for(let i = 2;i<a;i++){
    if(a%i==0){
      check = false
    }
  }
  if(check){
    return "yes"
  }else{
    return "no"
  }
}
let m = 29;
console.log(prime(m))
