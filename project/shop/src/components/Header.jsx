import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      [<Link to="/">홈</Link>] [<Link to="/cart">장바구나</Link>] [
      <Link to="log-in">로그인</Link>] [<Link to="sign-up">회원가입</Link>]
    </header>
  );
}
