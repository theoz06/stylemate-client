import Header from '@/components/header';
import React from 'react'

const Wardrobe = () => {
  return (
    <article className='relative w-full h-full flex flex-col items-center '>
      <Header title="Wardrobe" />

      <main className='w-full h-full flex flex-col items-center justify-center p-3 text-[#123458] mt-1'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-bold'>Wardrobe</h1>
          <p className='text-sm'>Ini adalah halaman wardrobe.</p>
        </div>
      </main>

    </article>
  )
}

export default Wardrobe;