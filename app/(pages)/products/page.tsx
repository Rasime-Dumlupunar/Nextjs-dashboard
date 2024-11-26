import Title from '@/components/title';
import { getProducts } from '@/utils/api';
import React, { Suspense } from 'react'
import Card from './Card';
import Loading from '../loading';
import Link from 'next/link';

const Products = async () => {
  

  return (
    <div>
    <div className='flex justify-between'>
      <Title>Ürünler</Title>

      <Link href='/products/new' className='bg-green-600 py-2 px-3 text-lg rounded-lg transition text-white hover:bg-green-500'>Ürün Ekle</Link>
      </div>
      <Suspense fallback={<Loading/>}>
        <List/>
      </Suspense>
      
    </div>
    
  )
}

const List = async () => {
  const data = await getProducts();
  //await wait();

  return(
  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
    {data.map((product) => (
      <Card product={product} key={product.id}/>
    ))}
    </div>
  )
};

export default Products;
