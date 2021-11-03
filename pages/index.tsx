import React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className = 'bg-blue-500'>
     <p>Pagina de Index</p>
     <Link href ="folder/usuarios">
     <a className = 'cursor-pointer'>Ir a admin usuarios</a>
     </Link>
    </div>
  )
}

export default Home
