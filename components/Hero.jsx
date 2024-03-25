import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className='py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5'>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* text */}
          <div className='w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start'>
            <h1 className='text-center xl:text-left mb-6'>
              Where <span>Reading</span> Mangá Begin
            </h1>
            <p className='mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0'>
              The world of manga invites you on an epic journey, filled with adventures, romances, and reflections. But where to start? Don't worry, we're here to guide you on this first step!
            </p>
            {/* btn group */}
            <div className='flex items-center gap-4 mx-auto xl:mx-0'>
              <Link href='/our-mangas' className='mx-auto md:mx-0'>
                <button className='btn btn-primary'>Shop now</button>
              </Link>
              <Link href='/our-mangas' className='mx-auto md:mx-0'>
                <button className='btn btn-accent'>Our mangas</button>
              </Link>
            </div>
          </div>
          {/* img */}
          <div className='hidden xl:flex'>
            <Image 
              src='/hero/hero.png' 
              width={300}
              height={400}
              alt=''
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );    
};

export default Hero;