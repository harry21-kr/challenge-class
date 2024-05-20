import { Link, useLoaderData } from "react-router-dom";

const PostListPage = () => {
  const postList = useLoaderData();
  return (
    <div>
      <h1>포목페</h1>

      <ol>
        {postList.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PostListPage;
