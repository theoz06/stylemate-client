import Header from '@/components/header';
import React from 'react';
import index from './index.module.css';

const Wardrobe = () => {
  return (
    <article className='relative w-full min-h-screen flex flex-col items-center '>
      <Header title="Wardrobe" />

      <main className='w-full h-full flex flex-col items-center justify-center pt-10 text-[#123458] mt-1'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-bold'>Wardrobe</h1>
          <p className='text-sm'>Ini adalah halaman wardrobe.</p>
        </div>
      </main>
      <button className={`${index.button} shadow-md shadow-gray-700 rounded-full absolute bottom-20 right-3 w-15 h-15 text-center p-2 text-5xl font-bold text-[#F1EFEC] bg-[#123458]`}>
        +
      </button>
    </article>
  )
}

export default Wardrobe;