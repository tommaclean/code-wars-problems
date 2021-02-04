function bouncingBall(h,  bounce,  window) {
    // Determine if input parameters are valid
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    } else return -1
    let bounceCount = -1
    // Loop, decreasing h every time, until it is less than window height
    while (h > window) {
      bounceCount += 2
      h = h * bounce
    }  
    return bounceCount
}