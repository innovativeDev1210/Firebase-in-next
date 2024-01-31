import Image from 'next/image'
import PostData from './_postdata/PostData'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-6xl">

      {/* firebase in nextjs */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center">Firebase in Next.js</h1>
        <p className="text-center">This is a starter template for Firebase in Next.js</p>
      </div>

      {/* form to post data */}
      <PostData />




    </main>
  )
}
