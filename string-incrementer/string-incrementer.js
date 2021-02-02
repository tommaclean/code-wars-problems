function incrementString(inputStr) {
    // Take the given string and remove the numbers using regex
    var stringWithoutNums = inputStr.replace(/[0-9]/g, '');
    
    // Storing how long the integer is because the zeroes will be stipped later
    var intLength = inputStr.length - stringWithoutNums.length;
    
    // Separating the numbers from the letters using the index 
    var inputStrNums = inputStr.slice(stringWithoutNums.length) || "0";
 
    // Taking the numbers, adding 1 to the sum, then turning into a string
    inputStrNums = String(parseInt(inputStrNums) + 1);
    
    // Because parsing an integer removes all zeroes, we must add them back in
    // Matching how many zeroes to the intLength variable we set earlier
    while (inputStrNums.length < intLength) {
        inputStrNums = "0" + inputStrNums;
    }
        // Concat the two strings together
        return stringWithoutNums.concat(inputStrNums)
  }

  incrementString("foobar000")