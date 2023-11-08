import Image from 'next/image';
import Link from 'next/link'

import Header from '@/components/Header';
import Footer from '@/components/Footer';


import selectedProjectImg1 from '../../../public/assets/images/home/selected-project-1.jpg';
import selectedProjectImg2 from '../../../public/assets/images/home/selected-project-2.jpg';
import selectedProjectImg3 from '../../../public/assets/images/home/selected-project-3.jpg';

import linkedinLogo from '../../../public/assets/images/home/linkedin.svg';
import dribbbleLogo from '../../../public/assets/images/home/dribbble.svg';
import instagramLogo from '../../../public/assets/images/home/instagram.svg';
import twitterLogo from '../../../public/assets/images/home/twitter.svg';
import behanceLogo from '../../../public/assets/images/home/behance.svg';


export default function Home() {
  return (
    <div className='bg-dark-gray-200'>
      <Header />

      <main className='overflow-hidden'>
        <section className='w-5/6 mx-auto pt-[7.1875rem] md:pt-[9.4375rem]'>
          <h1 className='font-georama text-[2rem]/[1.574] mb-6 underline underline-offset-[1rem] decoration-1 decoration-emerald-400 md:text-[3.125rem]'>Why Hello, I am Arby, <br /> ingenious Interaction Designer and writer.</h1>
          <p className='mb-[2.3125rem] md:text-2xl'>I create meaningful connections between users and products.</p>
          <div className='flex flex-wrap gap-6 text-sm md:text-xl'>
            <Link href=''
              className='inline-flex items-center shrink-0 bg-main-gradient rounded-[2.125rem] py-4 px-6 uppercase'>View my work</Link>
            <Link href=''
              className='inline-flex items-center shrink-0 border border-current rounded-[2.125rem] py-4 px-6'>Contact me</Link>
          </div>
        </section>
        <div className='bg-dark-blue py-[7px] mt-[3.23rem] mb-[8.619rem] md:py-[11px] md:mt-[9.75rem]'>
          <div className='bg-green'>
            <div className="w-full -translate-y-px bg-blue py-2 inline-flex flex-nowrap gap-12 -rotate-[1.902deg] md:-rotate-[1.902deg] md:gap-28">
              <ul className='flex gap-12 py-2.5 animate-infinite-scroll md:text-4xl md:py-3 md:gap-28'>
                <li>Design</li>
                <li>Storytelling</li>
                <li>Illustrate</li>
              </ul>
              {/* needed a copy to prevent the animation from jumping when it reaches the end */}
              <ul className='flex gap-12 py-2.5 animate-infinite-scroll md:text-4xl md:py-3 md:gap-28' aria-hidden='true'>
                <li>Design</li>
                <li>Storytelling</li>
                <li>Illustrate</li>
              </ul>
              {/* needed a copy to prevent the animation from jumping when it reaches the end */}
              <ul className='flex gap-12 py-2.5 animate-infinite-scroll md:text-4xl md:py-3 md:gap-28' aria-hidden='true'>
                <li>Design</li>
                <li>Storytelling</li>
                <li>Illustrate</li>
              </ul>
            </div>
          </div>
        </div>
        <section className='mb-10'>
          <div className='w-5/6 mx-auto'>
            <h2 className='mb-6'>Selected Projects</h2>
            <blockquote className='flex flex-col max-w-[708px] mb-[3.9375rem] md:mb-[7rem]'>
              <p className='text-2xl/[1.296] font-bold bg-main-gradient bg-clip-text text-transparent md:text-5xl'>What is worth doing is worth doing your best.</p>
              <footer className='self-end'>
                ---<cite>Copilot</cite>
              </footer>
            </blockquote>
          </div>

          <ul className='grid auto-rows-fr gap-8 md:w-11/12 md:mx-auto'>
            <li>
              <figure className='max-w-[1294px] mx-auto'>
                <div className='relative h-[282px] overflow-hidden mb-7 md:rounded-[2rem] md:mb-12 md:h-auto md:aspect-[1294/524] before:content-[""] before:bg-black/40 before:absolute before:inset-0 before:z-10'>
                  <Image
                    src={selectedProjectImg1}
                    alt=''
                    className='absolute w-full h-full'
                  />
                  <ul className='absolute bottom-0 mb-[1.4375rem] text-[1.0625rem] ml-[1.4375rem] flex flex-wrap gap-[0.8125rem] items-start z-10'>
                    <li className='bg-gradient-to-r from-[#b9b9b9] to-[#727272] w-fit py-1.5 px-4 rounded-[34px]'>UI/UX Design</li>
                    <li className='bg-gradient-to-r from-[#b9b9b9] to-[#727272] w-fit py-1.5 px-4 rounded-[34px]'>Research</li>
                  </ul>
                </div>
                <figcaption className='w-5/6 mx-auto md:w-auto'>
                  <h3 className='text-xl mb-[0.5625rem] md:text-[2rem]'>Shoppie</h3>
                  <p className='mb-5 max-w-[782px] md:text-2xl'>Shoppie is an e-commerce marketplace connecting electronic spare parts sellers to potential buyers.</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className='max-w-[1294px] mx-auto'>
                <div className='relative h-[282px] overflow-hidden mb-7 md:rounded-[2rem] md:mb-12 md:h-auto md:aspect-[1294/524] before:content-[""] before:bg-black/10 before:absolute before:inset-0 before:z-10'>
                  <Image
                    src={selectedProjectImg2}
                    alt=''
                    className='absolute w-full h-full'
                  />
                  <ul className='absolute bottom-0 mb-[1.4375rem] text-[1.0625rem] ml-[1.4375rem] flex flex-wrap gap-[0.8125rem] items-start z-10'>
                    <li className='bg-gradient-to-r from-[#b9b9b9] to-[#727272] w-fit py-1.5 px-4 rounded-[34px]'>UI/UX Design</li>
                    <li className='bg-gradient-to-r from-[#b9b9b9] to-[#727272] w-fit py-1.5 px-4 rounded-[34px]'>Research</li>
                  </ul>
                </div>
                <figcaption className='w-5/6 mx-auto md:w-auto'>
                  <h3 className='text-xl mb-[0.5625rem] md:text-[2rem]'>Shoppie</h3>
                  <p className='mb-5 max-w-[782px] md:text-2xl'>Shoppie is an e-commerce marketplace connecting electronic spare parts sellers to potential buyers.</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className='max-w-[1294px] mx-auto'>
                <div className='relative h-[282px] overflow-hidden mb-7 md:rounded-[2rem] md:mb-12 md:h-auto md:aspect-[1294/524] before:content-[""] before:bg-black/60 before:absolute before:inset-0 before:z-10'>
                  <Image
                    src={selectedProjectImg3}
                    alt=''
                    className='absolute w-full h-full'
                  />
                  <ul className='absolute bottom-0 mb-[1.4375rem] text-[1.0625rem] ml-[1.4375rem] flex flex-wrap gap-[0.8125rem] items-start z-10'>
                    <li className='bg-gradient-to-r from-[#b9b9b9] to-[#727272] w-fit py-1.5 px-4 rounded-[34px]'>UI/UX Design</li>
                    <li className='bg-gradient-to-r from-[#b9b9b9] to-[#727272] w-fit py-1.5 px-4 rounded-[34px]'>Research</li>
                  </ul>
                </div>
                <figcaption className='w-5/6 mx-auto md:w-auto'>
                  <h3 className='text-xl mb-[0.5625rem] md:text-[2rem]'>Shoppie</h3>
                  <p className='mb-5 max-w-[782px] md:text-2xl'>Shoppie is an e-commerce marketplace connecting electronic spare parts sellers to potential buyers.</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className='max-w-[1294px] mx-auto'>
                <div className='relative h-[282px] overflow-hidden mb-7 md:rounded-[2rem] md:mb-12 md:h-auto md:aspect-[1294/524] before:content-[""] before:bg-black/60 before:absolute before:inset-0 before:z-10'>
                  <Image
                    src={selectedProjectImg3}
                    alt=''
                    className='absolute w-full h-full'
                  />
                  <ul className='absolute bottom-0 mb-[1.4375rem] text-[1.0625rem] ml-[1.4375rem] flex flex-wrap gap-[0.8125rem] items-start z-10'>
                    <li className='bg-gradient-to-r from-[#b9b9b9] to-[#727272] w-fit py-1.5 px-4 rounded-[34px]'>UI/UX Design</li>
                    <li className='bg-gradient-to-r from-[#b9b9b9] to-[#727272] w-fit py-1.5 px-4 rounded-[34px]'>Research</li>
                  </ul>
                </div>
                <figcaption className='w-5/6 mx-auto md:w-auto'>
                  <h3 className='text-xl mb-[0.5625rem] md:text-[2rem]'>ODJ Website</h3>
                  <p className='mb-5 max-w-[782px] md:text-2xl'>Shoppie is an e-commerce marketplace connecting electronic spare parts sellers to potential buyers.</p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <section className='w-5/6 max-w-[1294px] mx-auto mb-[8.0625rem] md:w-11/12'>
          <h2 className='hidden mb-6 md:block'>Contact me</h2>

          <p className='hidden mb-[6.875rem] bg-main-gradient bg-clip-text text-transparent text-4xl/[1.296] font-bold max-w-[804px] md:block'>My Best friend says there&apos;s nothing like over communication.</p>

          <div className="flex flex-col gap-x-12 gap-y-4 md:flex-row">
            <h3 className='text-2xl'>Get in touch</h3>

            <div className='flex flex-wrap gap-6'>
              <a
                className='shrink-0'
                href='https://www.linkedin.com/in/abisola-jegede'
                target='_blank'
                rel='noopener noreferrer'
                title='Linkedin'>
                <Image
                  src={linkedinLogo}
                  alt='Linkedin logo'
                  className=''
                />
              </a>
              <a
                className='shrink-0'
                href='https://dribbble.com/AbisolaJegede'
                target='_blank'
                rel='noopener noreferrer'
                title='Dribbble'>
                <Image
                  src={dribbbleLogo}
                  alt='Dribbble logo'
                  className=''
                />
              </a>
              <a
                className='shrink-0'
                href='https://www.instagram.com/arby_ui.ux'
                target='_blank'
                rel='noopener noreferrer'
                title='Instagram'>
                <Image
                  src={instagramLogo}
                  alt='Instagram logo'
                  className=''
                />
              </a>
              <a
                className='shrink-0'
                href='https://twitter.com/arby981'
                target='_blank'
                rel='noopener noreferrer'
                title='Twitter'>
                <Image
                  src={twitterLogo}
                  alt='Twitter logo'
                  className=''
                />
              </a>
              <a
                className='shrink-0'
                href='https://www.behance.net/abisolajegedea'
                target='_blank'
                rel='noopener noreferrer'
                title='Behance'>
                <Image
                  src={behanceLogo}
                  alt='Behance logo'
                  className=''
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
