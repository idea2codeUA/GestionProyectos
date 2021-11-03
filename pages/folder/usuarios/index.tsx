import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
const index = () => {
  return (
    <div className = 'bg-green-500'>
      <Head>
        <title>Usuarios | Idea to code </title>
      </Head>
      <div>pagina de admin de usuarios</div>
      <div><i className='fas fa-house-user' /><i className="fas fa-snowman"></i>
</div>
    <div>
    <Link href = '/'>
    <a className = 'cursor-pointer'>Ir al Home</a>
    
    </Link>
    </div>
   
    </div>
  )
}

export default index
