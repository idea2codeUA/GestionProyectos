import React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import Head from 'next/head';


const Home: NextPage = () => {
  return (
    <div className = 'bg-blue-500'>
      <Head>
        <title>Home | Idea to code </title>
      </Head>
     <p>Pagina de Index</p>
     <Link href ="folder/usuarios">
     <a className = 'cursor-pointer'>Ir a admin usuarios</a>
     </Link>
     <div>
        <i className='fas fa-igloo' />
      </div>

    </div>
  )
}

export default Home
