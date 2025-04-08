import Header from '@/components/header';
import React from 'react'

const Profil = () => {
  return (
    <article className='relative w-full h-full flex flex-col items-center '>
      <Header title="Profil" />
      <main className='w-full h-full flex flex-col items-center justify-center p-3 text-[#123458] mt-1'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-bold'>Profil</h1>
          <p className='text-sm'>Ini adalah halaman profil.</p>
        </div>
      </main>
    </article>
  )
}

export default Profil;