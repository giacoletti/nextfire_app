import Link from "next/link";
import toast from "react-hot-toast";

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

      <button
        data-cy="toast-button"
        onClick={() => toast.success("Hello toast!")}
      >
        Toast Me
      </button>
    </div>
  );
}
