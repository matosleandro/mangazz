import {client} from '@/app/lib/sanity';
import MangaCategories from '@/components/MangaCategories';

const getData = async () => {
    const query = `*[_type == 'product'] {
        _id,
        name,
        description,
        images,
        price,
        price_id,
        "slug": slug.current,
        "categories": categories[]-> {name}
    }`;
    const data = await client.fetch(query);
    return data;
};

const OurMangas = async () => {
    const mangas = await getData();

    return (
        <div>
            <MangaCategories mangas={mangas} />
        </div>
    );
};

export default OurMangas;