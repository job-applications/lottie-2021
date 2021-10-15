import { ClipboardCheckIcon, CurrencyPoundIcon, StarIcon } from '@heroicons/react/outline'

export default function Entry({ data }) {
  const address = [...new Set([data.location, data.region, data.county])];
  return (
    <article>
      <div class="container relative">
        <figure class="aspect-w-16 aspect-h-9 mb-2">
         <img class="object-cover w-full" src={`https://lottie-boh-assets.s3.eu-west-2.amazonaws.com/${data.imagePath}`} alt={data.name}></img>
        </figure>
        {data.greenerChoice && (
          <span class="absolute py-2 px-4 bg-green-500 text-white text-center font-bold rounded-full bottom-3 left-3 text-xs">Greener Choice</span>
        )}
      </div>
      <h1 class="font-bold text-2xl">{data.name}</h1>
      <address class="not-italic">{address.join(', ')}</address>

      <ul class="mt-2">
        <li><ClipboardCheckIcon className="h-5 w-5 text-green-600 inline-block" /> <span class="font-bold">X</span> care home type</li>
        <li><StarIcon className="h-5 w-5 text-green-600 inline-block" /> <span class="font-bold">{data.cqcRating}</span> CQC Rating</li>
        <li><CurrencyPoundIcon className="h-5 w-5 text-green-600 inline-block" /> from <span class="font-bold">£{data.pricesFrom.toFixed(2)}</span> weekly</li>
      </ul>
    </article>
  )
}
