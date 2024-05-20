import { useLoaderData } from "react-router-dom";

export default function PostDetailPage() {
  const { title, body } = useLoaderData();

  return (
    <div>
      <h1>포디페</h1>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
