// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.


const weatherInfo = (temp) => {
    const cels = (temp - 32) * (5/9)
    return cels <= 0 ? cels + " is freezing temperature" :
    cels + " is above freezing temperature"
  }