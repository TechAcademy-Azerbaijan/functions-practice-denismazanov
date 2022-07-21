function arr(array){
  let list = [];
  for(let i = 0;i<array.length;i++){
    list.push(array[array.length -1- i])
  }
  return list
}
let m =[92846,96841,33582,25998];

for(let k = 0;k<arr(m).length;k++){
  console.log(arr(m)[k])
}
