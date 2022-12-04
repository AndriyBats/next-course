import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout title="Home page">
      <h1>Hello Next.JS</h1>
      <p>
        <Link href={"/about"}>About</Link>
      </p>
      <p>
        <Link href="/posts">Posts</Link>
      </p>
      <p>
        Lorem ipsum kwhkjkjx dxidhkj xwjxwjxw weoijdoiewj d jwoidjoew dewj
        djoewjdo woi dowoi cdew oic
      </p>
    </MainLayout>
  );
}
