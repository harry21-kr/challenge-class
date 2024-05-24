import { Provider } from "react-redux";
import "./App.css";
import MemoPage from "./pages/MemoPage";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <MemoPage />
    </Provider>
  );
}

export default App;
