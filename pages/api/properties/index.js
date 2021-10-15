import { pipeWith } from 'pipe-ts';
import propertiesDb from './listings.json';

const PER_PAGE = 20;

const propertiesArr = Object.keys(propertiesDb).map(key => {
  return  { key, data: propertiesDb[key] };
});

export default function handler(req, res) {
  const { cqcRating, minPrice, maxPrice, region, greenerChoice, offset } = req.query;

  const filters = [];
  if (cqcRating) {
    filters.push(filterByRating(cqcRating));
  }

  if (minPrice) {
    filters.push(filterMinPrice(Number(minPrice)));
  }

  if (maxPrice) {
    filters.push(filterMaxPrice(Number(maxPrice)));
  }

  if (region) {
    filters.push(filterRegion(region));
  }

  if (greenerChoice) {
    filters.push(filterGreenerChoice());
  }

  const filtered = pipeWith(propertiesArr, ...filters);
  const startAt = offset % PER_PAGE === 0 ? offset : 0;
  const endAt = offset + PER_PAGE;

  res.status(200).json({
    total: filtered.length,
    maxPages: Math.ceil(filtered.length / PER_PAGE),
    curPage: Math.floor(startAt / PER_PAGE) + 1,
    items: filtered.slice(startAt, endAt),
  })
}

// Helper methods
const filterProperties = fn => properties => properties.filter(property => fn(property.data))

const splitRating = input => input.split(',');

const getPrice = input => input.pricesFrom;

const filterByRating = cqcRating => {
  const ratings = splitRating(cqcRating);
  return filterProperties(property => ratings.includes(property.cqcRating))
}

const filterMinPrice = price => filterProperties(property => getPrice(property) >= price)

const filterMaxPrice = price => filterProperties(property => getPrice(property) <= price)

const filterRegion = region => filterProperties(property => property.region === region)

const filterGreenerChoice = () => filterProperties(property => property.greenerChoice)
