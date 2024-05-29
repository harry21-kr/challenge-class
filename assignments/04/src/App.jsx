function App() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-2xl font-bold">토스트 컨트롤러</h1>
        <div className="flex flex-col gap-1">
          <label className="text-sm">제목 (필수)</label>
          <input className="w-80 border rounded-md px-4 py-2.5" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm">내용 (필수)</label>
          <input className="w-80 border rounded-md px-4 py-2.5" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm">노출 시간(ms) (선택)</label>
          <input className="w-80 border rounded-md px-4 py-2.5" />
        </div>
        <button className="bg-black text-white w-full py-3 text-[15px] rounded-md hover:bg-black/80 active:bg-black/70 transition-all">
          토스트 띄우기
        </button>
      </div>
    </main>
  );
}

export default App;
