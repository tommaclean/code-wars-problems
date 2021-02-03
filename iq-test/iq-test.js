function iqTest(numbers){
    // Turn the numbers string into an arry to iterate over
    let numArr = numbers.split(" ")
    // Declare odd and even arrays to determine which (odd or even) is different than the rest
    let oddArr = []
    let evenArr = []
    
    // Iterate over the numArr, pushing each number to their respective arrays
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] % 2 == 0) {
        evenArr.push(numArr[i])
      } else {
        oddArr.push(numArr[i])
      }
    }
    
    // Find which array is shorter and return the place of that element within the original array
    let answer
    if (oddArr.length < evenArr.length) {
      answer = numArr.indexOf(oddArr[0]) + 1
    } else {
      answer = numArr.indexOf(evenArr[0]) + 1
    }
    return answer
  }