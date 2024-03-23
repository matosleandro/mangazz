import { client } from "@/app/lib/sanity";
import Link from 'next/link';
import PopularMangaCarousel from "./PopularMangaCarousel";

// get data
const getData = async () => {
    const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'light novel']._id, categories)] {
        _id,
          name,
          description,
          images,
          price,
          price_id,
          "slug": slug.current,
          "categories": categories[]-> {
            name
          }
      }`;
    const data = await client.fetch(query);
    return data;
};

const PopularMangas = async () => {
    const mangas = await getData();
    return (
        <section className='py-24'>
            <div className='container mx-auto'>
                <h2 className='text-center'>Most Popular Mangas</h2>
                <p className='text-center mb-[30px]'>The World's Premium Brands In One Destination</p>
                <PopularMangaCarousel mangas={mangas} />
                <Link href='/our-mangas'>
                    <button className='btn btn-accent mx-auto'>See all mangas</button>
                </Link>
            </div>
        </section>
    );
};

export default PopularMangas;