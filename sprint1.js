function modifyArray(array) {
    array[0] = 'Start'
    array.pop()
    array.push('End')
    return array
 }

//Write a function combineArray(arr1, arr2), which takes 2 arrays, and returns a new array consisting only of numeric elements of arrays arr1 and arr2.

function combineArray(arr1, arr2) {
    const newArr1 = arr1.filter(el => typeof(el) == 'number')
    const newArr2 = arr2.filter(el => typeof(el) == 'number')
    const arr3 = newArr1.concat(newArr2)
    return arr3
}

//Implement the longestLogin(loginList) function, which takes an array of user logins loginList  and returns the longest login.

function longestLogin(loginList) {
  const longestOne = loginList.reduce(function (a, b) {
    return a.length > b.length ? a : b
  }, '')
  return longestOne
}

//Implement the processArray(arr, factorial) function, which takes the first parameter of the array arr, and the second parameter the function factorial and processes each element of the array arr with the function factorial, returning a new array (the source array arr does not change)

function factorial(n) {
  if (n <= 1) {
    return 1
  }
  return n * factorial(n - 1)
}

function processArray(arr, factorial) {
  let newArr = arr.map(factorial)
  return newArr
}

//Write a checkAdult(age) function whose input parameter is the age of the user age.

function checkAdult(age) {
  try {
    if (!age) throw 'Please, enter your age'
    if (isNaN(age)) throw 'Please, enter number'
    if (age < 0) throw 'Please, enter positive number'
    if (age < 18) throw 'Access denied - you are too young!'
    if (!Number.isInteger(age)) throw 'Please, enter Integer number'
    console.log('Access allowed')
  } catch (err) {
    console.log('Error ' + err)
  } finally {
    console.log('Age verification complete')
  }
}
