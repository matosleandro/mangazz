'use client';
import { useState, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import Manga from './Manga';


const MangaCategories = ({mangas}) => {
    const [category, setCategory] = useState('all');
    const [filteredMangas, setFilteredMangas] = useState([]);
    const [price, setPrice] = useState(900);

    useEffect(()=> {
        const filtered = mangas.filter((manga) => {
            const categoryMatch = 
                category === 'all' 
                ? mangas 
                : manga.categories.some((categ) => categ.name === category);
            const priceMatch = manga.price <= price;
            return categoryMatch && priceMatch;
        });
        setFilteredMangas(filtered);
    }, [category, price, mangas]);

    

    return <section className='min-h-[1200px] py-10'>
        <div className='container mx-auto'>
            <div className='flex flex-col'>
                {/* sidebar */}
                <aside className='bg-yellow-100 w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed'>
                    <RadioGroup
                        defaultValue='all' 
                        className='flex flex-col gap-6 mb-12'
                    >
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem 
                                value='all' 
                                id='all'
                                onClick={() => setCategory('all')}
                            />
                            <label htmlFor="all">All</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem
                                value='drama' 
                                id='drama'
                                onClick={() => setCategory('drama')}
                            />
                            <label htmlFor="drama">Drama</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem 
                                value='medical' 
                                id='medical'
                                onClick={() => setCategory('medical')}
                            />
                            <label htmlFor="medical">Medical</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem 
                                value='mystery' 
                                id='mystery'
                                onClick={() => setCategory('mystery')}
                            />
                            <label htmlFor="mystery">Mystery</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem 
                                value='parody' 
                                id='parody'
                                onClick={() => setCategory('parody')}
                            />
                            <label htmlFor="parody">Parody</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem 
                                value='military' 
                                id='military'
                                onClick={() => setCategory('military')}
                            />
                            <label htmlFor="military">Military</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem 
                                value='adult cast' 
                                id='adult cast'
                                onClick={() => setCategory('adult cast')}
                            />
                            <label htmlFor="adult cast">Adult Cast</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem 
                                value='fantasy' 
                                id='fantasy'
                                onClick={() => setCategory('fantasy')}
                            />
                            <label htmlFor="fantasy">Fantasy</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem 
                                value='isekai' 
                                id='isekai'
                                onClick={() => setCategory('isekai')}
                            />
                            <label htmlFor="isekai">Isekai</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem 
                                value='action' 
                                id='action'
                                onClick={() => setCategory('action')}
                            />
                            <label htmlFor="action">Action</label>
                        </div>
                    </RadioGroup>
                    {/* price slider */}
                    <div className='max-w-56'>
                        <div className='text-lg mb-4 font-medium'>
                            Max Price: {' '}
                            <span className='text-accent font-semibold ml-2'>R$ {price}</span>
                            <span className='ml-2'>
                              {filteredMangas.length > 1
                                ? `${filteredMangas.length} items`
                                : filteredMangas === 0
                                ? `${filteredMangas.length} items`
                                : `${filteredMangas.length} item` }
                            </span>
                        </div>
                        <Slider 
                            defaultValue={[900]}
                            max={1000}
                            step={1}
                            onValueChange={(val) => setPrice(val[0])}
                        />
                    </div>
                </aside>
                {/* manga list */}
                <div className='bg-blue-300 w-full xl:w-[1050px] ml-auto'>manga list</div>
            </div>
        </div>
    </section>;
};

export default MangaCategories;