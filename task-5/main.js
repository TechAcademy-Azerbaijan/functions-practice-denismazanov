function max(array){
  let m = array[0]
  for(let i = 0;i<array.length;i++){
    if(array[i]>m){
      m = array[i]
    }
  }
  return m
}

array = [4,2,3,1,7,6,5]
console.log(max(array))
