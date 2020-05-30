const fs = require('fs');

setTimeout(() => {
  console.log('setTimeout');
}, 50);


fs.readFile('file.txt', () => {
  console.log('readFile');
});


// 1. V8 executes JS code
// Async calls

// 2. C_TIMEOUT controller start works
// refs++
// refs == 1

// 3. C_FS controller start work
// refs++
// refs == 2

// 4. EventLoop starts checking Queue

// 5. C_TIMEOUT finished
// register event for execution
// refs--
// refs == 1

// 6. JS executes callback
// console.log('setTimeout');

// 7. C_FS finished
// register event for execution
// refs--
// refs == 0

// 8. JS executes callback
// console.log('readFile');

// refs == 0
// process.exit
