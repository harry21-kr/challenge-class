import "./App.css";
import { useModal } from "./contexts/Modal/modal.context";
import "./custom.css";

function App() {
  const modal = useModal();

  const handleClickButton = () => {
    modal.open({ title: "테스트 타이틀", content: "테스트 컨텐츠" });
  };

  return (
    <main>
      <button onClick={handleClickButton}>모달 띄우기</button>
    </main>
  );
}

export default App;
