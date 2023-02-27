module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr1=[];
  let arr2=[];
  let arr3=[];
  let result=0;
  for (let i = 0; i < bracketsConfig.length; i++){
      //for (let a = 0; a < bracketsConfig[i].length; a++){
        arr1.push(bracketsConfig[i][0]);
        arr2.push(bracketsConfig[i][1]);
        console.log(arr1);
        console.log(arr2);
      //}
  } 
  for (let b = 0; b < str.length; b++){
    for (let a = 0; a < arr2.length; a++){
      if(str[b]===arr2[a]){
        console.log(str[b]);
        return false;}
      if(str[b]===arr1[a]){
        arr3.push(arr2[a]);
        result=result+1;
      }
      console.log(result);
      console.log(arr3);
    }
    for (let c = result; c > 0; c--){
      if(arr3[result-1]===str[b+1]){
      arr3.pop(0);
      console.log(arr3);
      result=result-1;
      b=b+1;}
    }
  }
  return true;
}
