import Link from "next/link";

export default function Page() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/env/dynamic/api">Dynamic API</Link>
        </li>
        <li>
          <Link href="/env/dynamic/page">Dynamic Page</Link>
        </li>
        <li>
          <Link href="/env/static/api">Static API</Link>
        </li>
        <li>
          <Link href="/env/static/page">Static Page</Link>
        </li>
      </ul>
    </div>
  );
}
