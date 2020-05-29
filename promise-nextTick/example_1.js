process.nextTick(() => {
  console.log('nextTick');
});

Promise.resolve()
  .then(() => {
    console.log('Promise');
  });
