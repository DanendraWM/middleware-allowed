function App() {
  let today = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));
  console.log(today)
  return (
    <div className="min-h-screen bg-slate-300 text-black">  
      <div className="card w-full bg-[#f5f2f2] shadow-[0_15px_20px_-20px_rgba(0,0,0,0.5)] rounded-b-lg rounded-t-none">
          <div className="card-body"></div>
      </div>
      <div className="flex flex-col py-4 space-y-4 justify-center items-center">
        <div className="card lg:w-2/3 w-4/5 bg-[#6f1d1b] shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)] rounded-md">
          <div className="card-body"></div>
        </div>

        <div className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
          <div className="card absolute bottom-90 w-full h-5 rounded-b-none bg-[#6f1d1b] shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)] rounded-md">
          </div>
          <div className="card-body">
            <p className="text-2xl">Middleware Entry Request</p>
            <h3 className="text-md">All Data Will Be Handled With Procedure </h3>
            <p className="text-sm">
              *Isi Form Dengan Nyata Tanpa Di Buat-Buat
            </p>
          </div>
        </div>
        <div className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
          <div className="card-body">
            <h2 className="card-title">*Nama Pengaju</h2>
            <p className="text-sm">
              Nama pemohon izin
            </p>
            <input
              className="bg-transparent  text-black border-black focus:outline-none border-b-2"
              type="text"
              placeholder="Full Name"
              aria-label="Full name"
              required
            />
          </div>
        </div>
        <div className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
          <div className="card-body">
            <h2 className="card-title">*Tujuan</h2>
            <p className="text-sm">
              Tujuan ke Middleware
            </p>
            <select className="select w-full max-w-xs rounded-none border-b-3 border-t-0 border-r-0 border-l-0 border-black divide-y divide-slate-200">
              <option disabled selected="true" >Berkepentingan untuk...</option>
              <option>Pemasangan Perangkat</option>
              <option>Pengecekan Perangkat</option>
              <option>Perawatan Perangkat</option>
              <option>Pencopotan Perangkat</option>
            </select>
          </div>
        </div>
        <div className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
          <div className="card-body">
            <h2 className="card-title">*Keterangan</h2>
            <p className="text-sm">
              Keterangan Dari pemohon
            </p>
            <input
              className="bg-transparent  text-black border-black focus:outline-none border-b-2"
              type="text"
              placeholder="Alasan / ket"
              aria-label="Full name"
              required
            />
          </div>
        </div>
        <div className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
          <div className="card-body">
            <h2 className="card-title">*Tanggal, dan waktu</h2>
            <p className="text-sm">
              tanggal dan waktu kunjungan
            </p>
            <input
              className="bg-transparent  text-black border-black focus:outline-none border-b-2"
              type="datetime-local"
              placeholder="Alasan / ket"
              aria-label="Full name"
              min={today}
              required
            />
          </div>
        </div>
        <button className="btn lg:w-2/3 w-4/5 bg-[#6f1d1b] text-white border-none hover:bg-slate-400 hover:text-slate-800 hover:outline-3" >
          Button
        </button>
      </div>
    </div>
  );
}

export default App;
