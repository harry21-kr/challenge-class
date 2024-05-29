import { useAuth } from "../contexts/useAuth";

const Display = () => {
  const { isLoggedIn } = useAuth();

  return <div>로그인 여부 {isLoggedIn.toString()}</div>;
};

export default Display;
