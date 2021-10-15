const fs = require('fs')
const path = require('path');

const data = fs.readFileSync(path.resolve(__dirname,'./properties/listings.json'));
const parsed = JSON.parse(data);

const regions = [];

for (const [key, value] of Object.entries(parsed)) {
  if (!regions.includes(value.region)) {
    regions.push(value.region)
  }
}

console.log(regions);
