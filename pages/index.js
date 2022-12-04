import Link from "next/link"
import Head from "next/head"
import { MainLayout } from "../components/MainLayout"

export default function Home() {
  return (
    <MainLayout>
      <Head>
      <title>Next Title Index Hello</title>
      <meta name='keywords' content='next, javascript'/>
      <meta charSet="utf-8" />
      </Head>
      <h1>Hello Next.JS</h1>
      <p><Link href={"/about"}>About</Link></p>
      <p><Link href="/posts">Posts</Link></p>
      <p>Lorem ipsum kwhkjkjx dxidhkj xwjxwjxw  weoijdoiewj d jwoidjoew dewj djoewjdo woi dowoi cdew oic</p>
    </MainLayout>
  )
}
