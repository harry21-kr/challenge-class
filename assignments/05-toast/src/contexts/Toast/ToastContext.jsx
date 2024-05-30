import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Toast from "../../components/Toast/Toast";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const onPresentToast = (options) => {
    const newId = uuidv4();
    const element = <Toast options={options} />;

    setToasts((prevToasts) => [...prevToasts, { element: element, id: newId }]);

    setTimeout(
      () => {
        setToasts((prevToasts) => prevToasts.filter(({ id }) => id !== newId));
      },
      options.delay ? options.delay + 500 : 2500
    );
  };

  return (
    <ToastContext.Provider value={{ toasts, onPresentToast }}>
      {children}
      {toasts.length > 0 && (
        <ul className="fixed right-6 bottom-6 flex flex-col gap-6">
          {toasts.map(({ element, id }) => (
            <li key={id}>{element}</li>
          ))}
        </ul>
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
