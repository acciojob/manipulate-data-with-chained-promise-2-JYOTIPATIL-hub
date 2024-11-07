//your JS code here. If required.
// The array to be transformed
const numbers = [1, 2, 3, 4];

// Function to simulate the delay (using promise)
function delay(time, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}

// Function to perform the transformations with chained promises
function manipulateData() {
  // Start by returning a promise that resolves with the array after 3 seconds
  return delay(3000, numbers)
    .then((arr) => {
      // After 3 seconds, filter out odd numbers
      const evenNumbers = arr.filter((num) => num % 2 === 0);

      // Update the output div with the even numbers after 1 second
      return delay(1000, evenNumbers);
    })
    .then((evenNumbers) => {
      // After 1 second, multiply the even numbers by 2
      const multipliedNumbers = evenNumbers.map((num) => num * 2);

      // Update the output div with the multiplied numbers after 2 seconds
      return delay(2000, multipliedNumbers);
    })
    .then((finalNumbers) => {
      // Finally, update the output div with the final result
      document.getElementById('output').textContent = `Final Result: ${finalNumbers.join(', ')}`;
    })
    .catch((error) => {
      // Catch any errors that might occur during the promise chain
      document.getElementById('output').textContent = `Error: ${error.message}`;
    });
}

// Call the manipulateData function to execute the promise chain
manipulateData();
