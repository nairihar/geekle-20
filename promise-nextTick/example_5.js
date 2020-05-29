const fs  = require('fs');

fs.readFile('file.txt', () => {
  process.nextTick(() => {
    console.log('nextTick in fs');
  });

  setTimeout(() => {
    console.log('setTimeout');
    
    process.nextTick(() => {
      console.log('nextTick in setTimeout');
    });
  }, 0);
  
  setImmediate(() => {
    console.log('setImmediate');

    process.nextTick(() => {
      console.log('nextTick in setImmediate');

      Promise.resolve()
        .then(() => {
          console.log('Promise in setImmediate');
        });
    });
  });  
});
  