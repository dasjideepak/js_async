Guess the output of the codes below :-

1.
```js
function sayHello() {
  console.log("Hey You Called Me");
}
setTimeout(sayHello, 1000);

console.log("Hey You!");
```

 output - "Hey You!" and after 1 sec "Hey You Called Me"

2.
```js
function sayHello() {
  console.log("Hey You Called Me");
}

setTimeout(sayHello, 0);

console.log("Hey You!");
```
 output - "Hey You!" and after that "Hey You Called Me"

3.
```js
function main() {
  console.log("A");
  setTimeout(function display() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();
```
 output - first A, then C, after that B

4.
```js
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  console.log("A");
  setTimeout(function exec() {
    console.log("B");
  }, 0);
  runWhileLoopForNSeconds(3);
  console.log("C");
}

main();

```
 output - A, C and B

5. Look at the output of the code below to understand hwo things are happening.

```js
  function runWhileLoopForNSeconds(sec) {
    let start = Date.now(),
      now = start;
    while (now - start < sec * 1000) {
      now = Date.now();
    }
  }
  function main() {
    var current = Date.now();
    console.log("A", Date.now() - current);
    setTimeout(function exec() {
      console.log("B", Date.now() - current);
    }, 1000);
    runWhileLoopForNSeconds(3);
    console.log("C", Date.now() - current);
  }

  main();

```