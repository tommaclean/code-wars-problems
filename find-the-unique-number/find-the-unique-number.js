function findUniq(arr) {
    // Sort the array so both sets of numbers are together
    arr.sort()
    // If the first and second elements are not the same, return the first
    // If they ARE the same, pop the last element off
    return (arr[0] !== arr[1]) ?  arr[0] : arr.pop()
  }