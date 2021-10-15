const fs = require('fs')
const path = require('path');

const data = fs.readFileSync(path.resolve(__dirname,'./properties/listings.json'));
const parsed = JSON.parse(data);

const ratings = [];

for (const [, value] of Object.entries(parsed)) {
  if (!ratings.includes(value.cqcRating)) {
    ratings.push(value.cqcRating)
  }
}

console.log(ratings);
