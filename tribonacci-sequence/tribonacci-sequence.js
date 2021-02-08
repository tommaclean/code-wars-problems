function tribonacci(signature,n){
    // Edge cases: if n is 0 or undefined
    if (n == 0 || n == undefined) {
      return []
    // Because we are iterating starting with index 3, if n is smaller
    } else if (n < 3) {
      return signature.slice(0, n)
    }
    
    // Iterate up to the length requested (n)
    for (let i = 3; i < n; i++) {
    // Taking the last three numbers from the array
      let numToPush = signature[signature.length - 1] + signature[signature.length - 2] + signature[signature.length - 3]
      signature.push(numToPush)
    }
    // Once the length requested is met, return the array with the new additions
    console.log(signature)
    return signature
  }

tribonacci([1,1,1],10)
tribonacci([0,0,1],10)
tribonacci([0,1,1],10)
tribonacci([1,0,0],10)
tribonacci([0,0,0],10)
tribonacci([1,2,3],10)
tribonacci([3,2,1],10)
tribonacci([1,1,1],1)
tribonacci([300,200,100], 0)
tribonacci([0.5,0.5,0.5],30)