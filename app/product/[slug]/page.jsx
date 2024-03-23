import { client, urlFor } from '@/app/lib/sanity';
import Image from 'next/image';
import AddToCartBtn from '@/components/AddToCartBtn';
import Link from 'next/link';

import {
  Book,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft
} from 'lucide-react';

const getData = async (slug)=> {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "category": categories->{name}
  }`;
  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({params}) => {
  const manga = await getData(params.slug);
  return <section className='pt-24 pb-32'>
    <div className="container mx-auto">
      <div className='flex flex-col xl:flex-row gap-14'>
        {/* img */}
        <div className='xl:flex-1 h-[500px] bg-primary/5 xl:w-[280px] xl:h-[576px] flex justify-center items-center'>
          <Image 
            src={urlFor(manga.images[0]).url()} 
            width={250}
            height={380}
            priority 
            alt='' 
          />
        </div>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center items-start gap-10'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <ChevronLeft size={20} />
            Back to home
          </Link>
          <div className='flex flex-col gap-6 items-start'>
            <div>
              <h3>{manga.name}</h3>
              <p className='text-lg font-semibold'>R$ {manga.price}</p>
            </div>
              <p>{manga.description}</p>
              <AddToCartBtn 
               price_id={manga.price_id}
               name={manga.name}
               currency='BRL'
               description={manga.description}
               images={manga.images}
               price={manga.price}
               text='Add to cart'
               btnStyles='btn btn-accent' 
              />
          </div>
          {/* info */}
          <div className='flex flex-col gap-3'>
            <div className='flex gap-2'>
              <PackageCheck size={20} className='text-accent' />
              <p>Free shipping on orders over R$ 130</p>
            </div>
            <div className='flex gap-2'>
              <RefreshCw size={20} className='text-accent' />
              <p>Free return for 30 days</p>
            </div>
            <div className='flex gap-2'>
              <Book size={20} className='text-accent' />
              <p>
                The mangas are partially assembled and benefit from transport insurance
              </p>
            </div>
            <div className='flex gap-2'>
              <Clock size={20} className='text-accent' />
              <p>Fast delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
};

export default ProductDetails;