import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";
import { User, Username } from "../types";

export default function Navbar() {
  const { user, username } = useContext(UserContext);

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
              <button onClick={() => auth.signOut()}>Sign Out</button>
            </li>
            <li>
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img data-cy="navbar-avatar" src={user?.photoURL} />
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
