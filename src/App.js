function App() {
  return (
    <div className="min-h-screen bg-slate-300 text-black">
      <div className="flex flex-col py-4 space-y-4 justify-center items-center">
        <div className="card lg:w-2/3 w-4/5 bg-[#6f1d1b] shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
          <div className="card-body"></div>
        </div>
        <div className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
          <div className="card-body">
            <h2 className="card-title">*Nama Pengaju</h2>
            <p className="text-sm">
              Nama di bawah akan di gunakan dalam pembuatan izin
            </p>
            <input
              class="bg-transparent  text-black border-black focus:outline-none border-b-2"
              type="text"
              placeholder="Wawan setiawan"
              aria-label="Full name"
            />
          </div>
        </div>
        <div className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <button className="btn lg:w-2/3 w-4/5 bg-[#6f1d1b] text-white border-none hover:bg-slate-400 hover:text-slate-800">
          Button
        </button>
      </div>
    </div>
  );
}

export default App;
