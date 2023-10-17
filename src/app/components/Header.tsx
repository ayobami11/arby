import Link from 'next/link';

import HamburgerButton from '@/components/HamburgerButton';

const Header = () => {
    return (
        <header className='font-georama w-11/12 py-6 mx-auto flex justify-between items-center gap-8'>
            <span className='uppercase md:text-lg'>Arby</span>
            <nav className='hidden sm:block'>
                <ul className='flex items-center gap-[3.4375rem]'>
                    <li>
                        <Link href=''>Resume</Link>
                    </li>
                    <li>
                        <Link href=''>About</Link>
                    </li>
                    <li>
                        <Link href=''>Playground</Link>
                    </li>
                    <li className='bg-white/[0.97] text-dark-gray-100 rounded-[2.125rem] py-2.5 px-5'>
                        <Link href=''>Contact me</Link>
                    </li>
                </ul>
            </nav>

            <HamburgerButton />
        </header>
    );
}

export default Header;