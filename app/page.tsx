import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li>
          <Link href="/edge/en-us/blog/a-category/post-slug">Edge Runtime</Link>
        </li>
        <li>
          <Link href="/node/en-us/blog/a-category/post-slug">Node Runtime</Link>
        </li>
      </ul>
    </main>
  );
}
