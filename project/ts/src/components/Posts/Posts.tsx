import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const END_POINT = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function Posts() {
  const { data: posts } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => axios.get(END_POINT).then((res) => res.data),
    initialData: [],
  });

  return (
    <div>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            [{post.id}] {post.title}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Posts;
