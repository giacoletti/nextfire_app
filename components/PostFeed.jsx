import Link from "next/link";

export default function PostFeed({ posts, admin }) {
  console.log(posts);
  return posts
    ? posts.map((post) => (
        <PostItem post={post} key={post.slug} admin={admin} />
      ))
    : null;
}

function PostItem({ post, admin = false }) {
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (
    <div className="card">
      <Link href={`/${post.username}`}>
        <a>
          <strong data-cy="post-author">By @{post.username}</strong>
        </a>
      </Link>

      <Link href={`/${post.username}/${post.slug}`}>
        <h2 data-cy="post-title">
          <a>{post.title}</a>
        </h2>
      </Link>

      <footer data-cy="post-footer">
        <span>
          {wordCount} words. {minutesToRead} min read
        </span>
        <span>❤️ {post.heartCount || 0} Hearts</span>
      </footer>
    </div>
  );
}
