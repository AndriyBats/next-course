import Link from "next/link";
import Head from "next/head"

export function MainLayout ({ children, title = 'Next App' }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content='next, javascript'/>
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link href={'/'}><span>Home</span></Link>
                <Link href={'/about'}><span>About</span></Link>
                <Link href={'/posts'}><span>Posts</span></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {`
                    nav {
                        height: 60px;
                        display: flex;
                        align-items: center;
                        background: black;
                        justify-content: space-around;
                    }

                    nav span {
                        color: white;
                    }   
                `}
            </style>
        </>
    )
}
