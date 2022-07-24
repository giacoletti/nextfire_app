import Link from "next/link";

export default function Custom404() {
  return (
    <main>
      <h1 data-cy="404-header">404 - That page does not seem to exist...</h1>
      <iframe
        data-cy="404-gif"
        src="https://giphy.com/embed/l2JehQ2GitHGdVG9y"
        width="480"
        height="362"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link href="/">
        <button data-cy="404-go-home-btn" className="btn-blue">
          Go home
        </button>
      </Link>
    </main>
  );
}
