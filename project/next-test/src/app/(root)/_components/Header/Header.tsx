import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b border-b-black">
      <div className="container mx-auto max-w-[1224px] px-5 h-16 flex items-center">
        <Link href="/" className="text-lg font-bold">
          중고마켓
        </Link>

        <nav className="ml-20">
          <ul className="flex items-center gap-x-8">
            <li>
              <Link href="/">구입하기</Link>
            </li>
            <li>
              <Link href="/deals/create">판매하기</Link>
            </li>
            <li>
              <Link href="/my/deals">내 판매글</Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto">
          <ul className="flex gap-8">
            <li>
              <Link href="/login">로그인</Link>
            </li>
            <li>
              <Link href="/sign-up">회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
