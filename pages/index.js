import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 data-cy="main-header">Welcome stranger!</h1>
      <Link
        prefetch={false}
        href={{ pathname: "/[username]", query: { username: "johnsmith21" } }}
      >
        <a data-cy="johnsmith21-link">John's profile</a>
      </Link>
    </div>
  );
}
