import Link from 'next/link';

import HamburgerButton from '@/components/HamburgerButton';

const Header = () => {
    return (
        <header className='fixed w-full bg-dark-gray-200 z-30 font-georama py-6'>
            <div className='w-11/12 mx-auto flex justify-between items-center gap-8'>
                <span className='uppercase md:text-lg'>Arby</span>
                <nav className='hidden sm:block'>
                    <ul className='flex items-center gap-[3.4375rem]'>
                        <li>
                            <Link
                                href=''
                                className='hover:bg-main-gradient hover:bg-clip-text hover:text-transparent hover:font-semibold'
                            >Resume</Link>
                        </li>
                        <li>
                            <Link
                                href=''
                                className='hover:bg-main-gradient hover:bg-clip-text hover:text-transparent hover:font-semibold'
                            >About</Link>
                        </li>
                        <li>
                            <Link
                                href=''
                                className='hover:bg-main-gradient hover:bg-clip-text hover:text-transparent hover:font-semibold'
                            >Playground</Link>
                        </li>
                        <li className='bg-white/[0.97] text-dark-gray-100 rounded-[2.125rem] py-2.5 px-5'>
                            <Link
                                href=''
                                className='hover:bg-main-gradient hover:bg-clip-text hover:text-transparent hover:font-semibold'
                            >Contact me</Link>
                        </li>
                    </ul>
                </nav>

                <HamburgerButton />
            </div>
        </header>
    );
}

export default Header;