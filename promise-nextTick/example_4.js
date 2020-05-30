setTimeout(() => {
  console.log('setTimeout');
}, 0);

let count = 0;
function rec() {
  count += 1;

  if (count === 20000000)
    return; // finish rec

  process.nextTick(rec);
}

rec();
