import { createContext, useContext, useState } from "react";
import Modal from "../../components/Modal/Modal";

const initialValue = {
  open: () => {},
  close: () => {},
};

export const ModalContext = createContext(null);

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalOptions, setModalOptions] = useState(null);

  const value = {
    open: (options) => {
      setModalOptions(options);
    },
    close: () => {
      setModalOptions(null);
    },
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && (
        <Modal title={modalOptions.title} content={modalOptions.content} />
      )}
    </ModalContext.Provider>
  );
};
