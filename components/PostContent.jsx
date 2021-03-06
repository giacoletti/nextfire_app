import Link from "next/link";
import ReactMarkdown from "react-markdown";

// UI component for main post content
export default function PostContent({ post }) {
  const createdAt =
    typeof post?.createdAt === "number"
      ? new Date(post.createdAt)
      : post.createdAt.toDate();

  return (
    <div className="card">
      <h1 data-cy="post-header">{post?.title}</h1>
      <span data-cy="post-author-created" className="text-sm">
        Written by{" "}
        <Link href={`/${post.username}`}>
          <a className="text-info">@{post.username}</a>
        </Link>{" "}
        on {createdAt.toISOString()}
      </span>
      <div data-cy="post-content">
        <ReactMarkdown>{post?.content}</ReactMarkdown>
      </div>
    </div>
  );
}
