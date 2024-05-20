export default async function postDetailPageLoader(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
