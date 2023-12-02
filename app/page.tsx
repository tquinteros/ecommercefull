import Image from 'next/image'
import { fetchRandomProducts } from './lib/data'

export default async function Home() {

  const randomProducts = await fetchRandomProducts();

  return (
    <main className="">
      asd
    </main>
  )
}
