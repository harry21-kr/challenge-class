import { useModal } from "./Modal.context";

function Modal() {
  const modal = useModal();

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/30">
      <div className="bg-white w-80 h-80 p-20">
        <p>본체</p>
        <button onClick={modal.close}>X</button>
      </div>
    </div>
  );
}

export default Modal;
