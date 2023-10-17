import Link from 'next/link';

export default function CaseStudyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <header>
                <span>Arby</span>
                <ul>
                    <li>
                        <Link href=''>Resume</Link>
                    </li>
                    <li>
                        <Link href=''>Blog</Link>
                    </li>
                    <li>
                        <a
                            href=''
                            target='_blank'
                            rel='noopener noreferrer'>
                            Dribbble</a>
                    </li>
                    <li>
                        <a
                            href=''
                            target='_blank'
                            rel='noopener noreferrer'>
                            Linkedin</a>
                    </li>
                </ul>
            </header>
            <main>{children}</main>
        </>
    )
}
