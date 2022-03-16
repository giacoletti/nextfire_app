import Link from "next/link";

export default function Navbar() {
  const user = null,
    username = null;

  return (
    <nav data-cy="navbar" className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button data-cy="feed-button" className="btn-logo">
              FEED
            </button>
          </Link>
        </li>

        {username ? (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/enter">
              <button data-cy="login-button" className="btn-blue">
                Log in
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
