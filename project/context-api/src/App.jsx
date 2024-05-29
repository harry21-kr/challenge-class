import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import AuthProvider from "./contexts/Auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Display />
      <Button />
    </AuthProvider>
  );
}

export default App;
