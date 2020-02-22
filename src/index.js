
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix) return [];
    let array = [];  
    let i = 0;
    for(arr of matrix){
      if (Array.isArray(arr)){
        i++;
        if(i % 2 == 0) arr = arr.reverse();
        for(item of arr){
          array.push(item);
        }
      }
    }
    return array;
}
