import { ClipboardCheckIcon, CurrencyPoundIcon, StarIcon } from '@heroicons/react/outline'

export default function Entry() {
  return (
    <article>
      <div class="container relative">
        <img src="https://lottie-boh-assets.s3.eu-west-2.amazonaws.com/Anavo+Care_Berehill+House_001.jpeg"></img>
        <span class="absolute py-2 px-4 bg-green-500 text-white text-center font-bold rounded-full bottom-3 left-3 text-xs">Pill Shape</span>
      </div>
      <h1 class="font-bold text-2xl">Berehill House</h1>
      <p><address class="not-italic">X Address, location, z.</address></p>
      
      <ul class="mt-2">
        <li><ClipboardCheckIcon className="h-5 w-5 text-green-600 inline-block" /> <span class="font-bold">X</span> care home type</li>
        <li><StarIcon className="h-5 w-5 text-green-600 inline-block" /> <span class="font-bold">X</span> CQC Rating</li>
        <li><CurrencyPoundIcon className="h-5 w-5 text-green-600 inline-block" /> from <span class="font-bold">£1300</span> weekly</li>
      </ul>
    </article>
  )
}