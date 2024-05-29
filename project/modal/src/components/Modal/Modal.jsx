import { useModal } from "../../contexts/Modal/modal.context";
import BackDrop from "./BackDrop";

const Modal = ({ title, content }) => {
  const modal = useModal();

  return (
    <BackDrop>
      <article className="modal">
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={() => modal.close()}>닫기</button>
      </article>
    </BackDrop>
  );
};

export default Modal;
