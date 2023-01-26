import React, { useState } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import telkom from "./components/Telkom.png";

function App() {
  const firstTime = format(new Date(), "HH:mm", { locale: id });
  const tanggalNow = format(new Date(), "dd MMMM yyyy", { locale: id });
  const [nama, setNama] = useState("");
  const [instansi, setInstansi] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [desc, setDesc] = useState("");
  const [endT, setEndT] = useState("");
  const kirim = (e) => {
    e.preventDefault();
    window.location.href = `https://api.whatsapp.com/send?phone=6285156834452&text======= *Izin Ke Middleware* ======%0a%0a%0aTanggal : ${tanggalNow}%0aDari Jam : ${firstTime}%0aSampai Jam : ${endT}%0aNama : ${nama}%0ainstansi : ${instansi}%0aTujuan : ${tujuan}%0aKeterangan : ${desc}%0a%0aTerima Kasih`;
  };

  return (
    <div className=" min-h-screen bg-slate-300 text-black  ">
      <div className="flex flex-row justify-center w-10 h-10 ">
        <img src={telkom} className="w-10 h-10"></img>
        <p>ASSSAASASAS</p>
      </div>

      <div className=" flex justify-center flex-col items-center py-4 sm:py-25 ">
        <div className="bg-white lg:w-1/2 w-5/6 h-full shadow-[0_6px_6px_-1px_gray] rounded-sm flex flex-col py-4 items-center rounded-sm	 ">
          <p className="text-lg sm:text-xl font-semibold p-2">- Middleware Entry Request -</p>
          <hr className="w-1/4 py-0" />
          <div className="card lg:w-1/2">
            <div className=" card-body p-2">
              <p className="card-title">
                <span className="text-rose-600">*</span>Nama Pengaju
              </p>
              <p className="text-sm">Nama pemohon izin</p>
              <input
                className="bg-transparent  text-black border-black focus:outline-none border-b-2"
                type="text"
                placeholder="Full Name"
                aria-label="Full name"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
          </div>
          <div className="card lg:w-1/2">
            <div className=" card-body p-2">
              <p className="card-title">
                <span className="text-rose-600">*</span>Instansi
              </p>
              <input
                className="bg-transparent  text-black border-black focus:outline-none border-b-2"
                type="text"
                placeholder="Full Name"
                aria-label="Full name"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
          </div>
          <div className="card lg:w-1/2">
            <div className=" card-body p-2">
              <p className="card-title">
                <span className="text-rose-600">*</span>Tujuan
              </p>
              <input
                className="bg-transparent  text-black border-black focus:outline-none border-b-2"
                type="text"
                placeholder="Full Name"
                aria-label="Full name"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
          </div>
          <div className="card lg:w-1/2">
            <div className=" card-body p-2">
              <p className="card-title">
                <span className="text-rose-600">*</span>Keterangan
              </p>
              <input
                className="bg-transparent  text-black border-black focus:outline-none border-b-2"
                type="text"
                placeholder="Full Name"
                aria-label="Full name"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
          </div>
          <div className="card lg:w-1/2">
            <div className=" card-body p-2 py-4">
              <p className="card-title">
                <span className="text-rose-600">*</span>Waktu
              </p>
              <p className="text-sm pl-1">Pada tanggal {tanggalNow}</p>
              <div className="border p-4 space-y-3">
                <p className="text-sm pl-1">Dari Jam</p>
                <input
                  className="bg-transparent  text-black border-black focus:outline-none border-b-2 w-full"
                  type="time"
                  placeholder="waktu"
                  aria-label="Full name"
                  required
                  readOnly
                  value={firstTime}
                />
                <p className="text-sm pl-1">Sampai jam</p>
                <input
                  className="bg-transparent  text-black border-black focus:outline-none border-b-2 w-full"
                  type="time"
                  id="appt"
                  name="appt"
                  min={firstTime}
                  required
                  onChange={(e) => setEndT(e.target.value)}
                />
              </div>
            </div>
          </div>
          <a
            href="#my-modal-2"
            className="btn lg:w-2/3 w-4/5 bg-[#6f1d1b] text-white border-none hover:bg-slate-400 hover:text-slate-800 hover:outline-3 space-y-2"
          >
            submit
          </a>
          <div className="modal" id="my-modal-2">
            <div className="modal-box bg-slate-100">
              <a
                href="#header"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </a>
              <h3 className="font-bold text-lg">Konfirmasi Pengiriman Data</h3>
              <p className="py-4">
                Data Sudah Di isi Dengan Kondisi Sadar dan jujur
              </p>
              <div className="modal-action">
                {/* <button className="btn lg:w-2/3 w-4/5 bg-[#6f1d1b] text-white border-none hover:bg-slate-400 hover:text-slate-800 hover:outline-3">
                  Kirim
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
