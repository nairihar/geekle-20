process.nextTick(() => {
  console.log('nextTick 1');

  process.nextTick(() => {
    console.log('nextTick 2');

    process.nextTick(() => console.log('nextTick 3'));
    process.nextTick(() => console.log('nextTick 4'));
  });

  process.nextTick(() => {
    console.log('nextTick 5');

    process.nextTick(() => console.log('nextTick 6'));
    process.nextTick(() => console.log('nextTick 7'));
  });
  
});
