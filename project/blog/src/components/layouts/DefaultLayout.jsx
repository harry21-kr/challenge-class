import { Link, Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div>
      <Outlet />
      <Link to="/">홈 페이지</Link>
      <br />
      <Link to="/posts">Post 목록 페이지</Link>
    </div>
  );
}
