/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}

testMe(); // "Partnah" first then "Howdy".

/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(() => console.log("Welcome"), 3000);  
}

delayedGreet();

/* CHALLENGE 3 */

function helloGoodbye() {
  console.log("Hello");
  setTimeout(() => console.log("Good Bye"), 2000);  
}

helloGoodbye();

/* CHALLENGE 4 */

var myVar;
function brokenRecord() {
  myVar = setInterval(() => {
    console.log("Hello")
  }, 1000);
}

function stop(event) {
    console.log(event.target);
    clearInterval(myVar);
};

document.addEventListner('keyup', stop) 
  
var every;
function brokenRecord() {
  // ADD CODE HERE
 every=setInterval(() => {
  console.log("hi again")
}, 1000);

}

function clear(event){
  console.log(event.target)
  clearInterval(every)
}

document.addEventListener("keydown",clear);


/* CHALLENGE 5 */

var myVar;

function limitedRepeat() {
  myVar = setInterval(() => {
    console.log("Hello")
  }, 1000);
}

clearInterval(myVar);

limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs() {
  // ADD CODE HERE
}

function theEnd() {
  console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 2, 20); 