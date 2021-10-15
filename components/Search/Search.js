import { useState, useEffect } from 'react';
import * as config from '../../config';

const getParsedFloat = input => Number.isNaN(Number.parseFloat(input)) ? null : Number.parseFloat(input);

const parseRatings = input => {
  const ratings = typeof input === 'string' ? input.split(',') : [];
  return config.ratings.map(value => ratings.includes(value));
}

export default function SearchForm({ onSubmit, initial }) {
  const [green, setGreen] = useState(false);
  const [region, setRegion] = useState('');

  const [ratings, setRatings] = useState(parseRatings());

  const [price, setPrice] = useState({
    from: '',
    to: '',
  });

  useEffect(() => {
    setGreen(!!initial.greenerChoice)
    setRatings(parseRatings(initial.cqcRating))
    setPrice({
      from: getParsedFloat(initial.minPrice) || '',
      to: getParsedFloat(initial.maxPrice) || '',
    });
    setRegion(config.regions.includes(initial.region) ? initial.region : '')
  }, [initial])

  const handleRatingChange = (position) => {
    const updatedCheckedState = ratings.map((item, index) =>
      index === position ? !item : item
    );
    setRatings(updatedCheckedState);
  };

  const handleSubmit = (event) => {
    const query = {};

    if (region) {
      query.region = region;
    }

    if(getParsedFloat(price.from)) {
      query.minPrice = getParsedFloat(price.from);
    }

    if(getParsedFloat(price.to)) {
      query.maxPrice = getParsedFloat(price.to);
    }

    if (ratings.some(value => value === true)) {
      query.cqcRating = ratings.map((value, position) => value ? config.ratings[position] : null).filter(rating => rating != null).join(',');
    }

    if (green) {
      query.greenerChoice = true;
    }

    onSubmit(event, query)
  }



  return (
    <div>
      <h2 className="text-3xl font-bold mt-10 mb-5">
        Search Form
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-x-2 gap-y-2 md:grid-cols-2 lg:grid-cols-4">
        <div class="bg-indigo-100 p-4 rounded">
          <h3 className="text-xl font-bold mb-2">Location</h3>

          <label className="block">Region
            <select onChange={event => setRegion(event.target.value)} value={region} className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline">
              <option />
              {config.regions.map(value => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
        </div>

        <div class="bg-indigo-100 p-4 rounded">
          <h3 className="text-xl font-bold mb-2">Price</h3>

          <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
            <div className="w-full px-2 md:w-1/2">
              <label className="block mb-1">From
                <input value={price.from} onChange={event => setPrice({ ...price, from: event.target.value })} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" />
              </label>
            </div>
            <div className="w-full px-2 md:w-1/2">
              <label className="block mb-1">To
                <input value={price.to} onChange={event => setPrice({ ...price, to: event.target.value })} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" />
              </label>
            </div>
          </div>
        </div>

        <div class="bg-indigo-100 p-4 rounded">
          <h3 className="text-xl font-bold mb-2">Property Rating</h3>
          {config.ratings.map((rating, position) => (
            <label className="text-gray-700 block" key={position}>
              <input checked={ratings[position]} onChange={() => handleRatingChange(position)} type="checkbox" value={rating} key={rating} /> <span className="ml-1">{rating}</span>
            </label>
          ))}
        </div>

        <div class="bg-indigo-100 p-4 rounded">
          <h3 className="text-xl font-bold mb-2">Other</h3>

          <label className="text-gray-700">
            <input type="checkbox" value="green" checked={green} onChange={() => setGreen(!green)} />
            <span className="ml-1">Greener Choice</span>
          </label>
        </div>

        <div>
          <input className="h-12 px-6 my-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" type="submit" />
        </div>
      </form>
    </div>
  )
}
