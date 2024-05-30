import ToastForm from "./components/ToastForm";

function App() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-2xl font-bold">토스트 컨트롤러</h1>
        <ToastForm />
      </div>
    </main>
  );
}

export default App;
