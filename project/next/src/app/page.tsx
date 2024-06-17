import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/posts">포스트 페이지</Link>

      <a href="/posts">포스트 페이지2</a>
    </main>
  );
}
