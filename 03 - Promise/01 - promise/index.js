// Challenge 1

function sayHello() {
  setTimeout(() => {
    console.log("Hello");
  }, 1000)
}

sayHello(); // should log "Hello" after 1000ms

// Challenge 2

var promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Resolved"), 1000);
});
promise.then(
  result => console.log(result)
);

// Challenge 3

promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject("Reject"), 1000);
})
promise.catch(
  error => console.log(error)
);


// Challenge 4

promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('Promise has been resolved!'), 0);
});

promise.then(() => console.log('Promise has been resolved!'));
console.log("I'm not the promise!");


// Challenge 5
function delay(){

}

delay().then(sayHello);


// Challenge 6

// var secondPromise =
// var firstPromise =


// Challenge 7

const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  // CODE GOES HERE
}