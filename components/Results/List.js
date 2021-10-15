import { useState, useEffect } from 'react';
import axios from 'axios';
import Entry from './Entry';

export default function List({ params, onPagination }) {
  const [data, setData] = useState({ curPage: 0, maxPages: 0, items: [], total: 175 });

  const PrevPage = ({ page }) => <li><button onClick={event => onPagination(event, page)} class="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100">Prev</button></li>
  const CurrentPage = ({ page }) => <li><button onClick={event => onPagination(event, page)} class="h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 focus:shadow-outline">{page}</button></li>;
  const NumberPage = ({ page }) => <li><button onClick={event => onPagination(event, page)} class="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-indigo-100">{page}</button></li>
  const NextPage = ({ page }) => <li><button onClick={event => onPagination(event, page)} class="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">Next</button></li>

  useEffect(async () => {
    const result = await axios.get(
      '/api/properties',
      { params }
    );

    setData(result.data);
    console.log(result.data);
  }, [params]);

  return (
    <div>
      <div class="grid grid-flow-row auto-rows-max md:grid-cols-2 gap-8 my-8">{data.items.map(property => <Entry key={property.key} data={property.data} />)}
      </div>

      <nav aria-label="Page navigation">
        <ul class="inline-flex">
          {data.curPage > 1 && <PrevPage page={data.curPage - 1} />}

          {[...Array(data.maxPages)].map((_, pageIndex) => {
            const page = pageIndex + 1;
            return page === data.curPage ? <CurrentPage key={page} page={page} /> : <NumberPage key={page} page={page} />
          })}

          {data.curPage < data.maxPages && <NextPage page={data.curPage + 1} />}
        </ul>
      </nav>
    </div>
  );
}
