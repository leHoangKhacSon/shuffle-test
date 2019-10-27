module.exports = function(arr) {
  
  try {
    if(!Array.isArray(arr)) {
      throw 'The parameter must be an array';
    }
    const arrCopy = [...arr];
    const shuffleArr = [];
    while(arrCopy.length > 0) {
      // random index 
      const index = Math.floor(Math.random() * arrCopy.length);
      // remove element of array
      const [ element ] = arrCopy.splice(index, 1);
      // add element 
      shuffleArr.push(element);
    }
    return shuffleArr;
  } catch (error) {
    return error;
  }
}