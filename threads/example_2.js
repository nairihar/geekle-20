const fs = require('fs');

setInterval(function() {}, 1000);

fs.readFile(__filename, 'utf8', () => {
  console.log(1);
});
