import * as config from '../../config';

export default function SearchForm({ onSubmit }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mt-10">
        Search Form
      </h2>

      <form onSubmit={onSubmit} class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
        <label class="block">Region
          <select class="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
            <option />
            {config.regions.map(region => <option value={region}>{region}</option>)}
          </select>
        </label>

        <label class="block">Price
          <input type="range" min={config.priceRange.minPrice} max={config.priceRange.maxPrice} step="10" />
        </label>

        <input type="submit" />
      </form>
    </div>
  )
}
