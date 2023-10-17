import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-dark-gray-400 pt-[4.0625rem] pb-[4.75rem] text-center'>
            <nav className='text-white/[86] mb-[1.375rem] max-w-[359px] mx-auto md:mb-[2.5625rem]'>
                <ul className='flex flex-wrap justify-between items-center gap-[1.0625rem] mx-4'>
                    <li>
                        <Link href=''>Resume</Link>
                    </li>
                    <li>
                        <Link href=''>About</Link>
                    </li>
                    <li>
                        <Link href=''>Articles</Link>
                    </li>
                    <li>
                        <Link href=''>Playground</Link>
                    </li>
                </ul>
            </nav>
            <p className='text-white/[68]'>@2023 All rights reserved</p>
        </footer>
    );
}

export default Footer;