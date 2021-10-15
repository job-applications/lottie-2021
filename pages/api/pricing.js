const fs = require('fs')
const path = require('path');

const data = fs.readFileSync(path.resolve(__dirname,'./properties/listings.json'));
const parsed = JSON.parse(data);

let minPrice = 0;
let maxPrice = 0;

for (const [key, value] of Object.entries(parsed)) {
  if ( value.pricesFrom < minPrice || !minPrice ) {
    minPrice = value.pricesFrom;
  }

  if ( value.pricesFrom > maxPrice ) {
    maxPrice = value.pricesFrom;
  }
}

console.log({ minPrice, maxPrice });
