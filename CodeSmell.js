  /* Example # 1 */
  function isNumber(test){
    if(typeof test === 'number')
      return true;
    else
      return false;
  }

  /* Example # 2 */
  function isNotBoolean(test){
    var retVal = false; //or any other initialization
    if(typeof test === "boolean"){
      retVal = false;
    }
    else{
      retVal = true;
    }
    return retVal;
  }

console.log(isNumber(4));
console.log(isNumber("Si"));

console.log(isNotBoolean(42));     // Expected output: true
console.log(isNotBoolean("hello"));// Expected output: true
console.log(isNotBoolean(true));