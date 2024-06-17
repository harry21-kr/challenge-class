import Link from "next/link";

function PostsPage() {
  return (
    <ul>
      {Array.from({ length: 100 }).map((_, idx) => (
        <Link key={idx} href={`/posts/${idx}`}>
          {idx}
        </Link>
      ))}
    </ul>
  );
}

export default PostsPage;
