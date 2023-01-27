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
      <form onSubmit={kirim}>
        <div className=" flex justify-center flex-col items-center m-0 py-10 sm:py-25 ">
          <div className="card bg-white  lg:w-1/2 w-5/6 h-full shadow-[0_6px_6px_-1px_gray] rounded-lg  flex flex-col py-0 items-center space-y-6">
            <div className="card absolute bottom-90 w-full h-6 rounded-b-none bg-[#6f1d1b] shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)] rounded-md"></div>
            <div className="flex flex-row justify-center  ">
              <img src={telkom} width={100} height={100} alt="logo"></img>
            </div>
            <p className="text-sm font-semibold p-3 ">
              - Middleware Entry Request -
            </p>
            <hr className="w-1/4 py-1 h-5 " />
            <div className="card lg:w-3/4 w-5/6">
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
            <div className="card lg:w-3/4 w-5/6">
              <div className=" card-body p-2">
                <p className="card-title">
                  <span className="text-rose-600">*</span>Instansi
                </p>
                <p className="text-sm">Dari Instansi mana ?</p>
                <input
                  className="bg-transparent  text-black border-black focus:outline-none border-b-2"
                  type="text"
                  placeholder="Instansi"
                  aria-label="Instansi"
                  required
                  value={instansi}
                  onChange={(e) => setInstansi(e.target.value)}
                />
              </div>
            </div>
            <div className="card lg:w-3/4 w-5/6">
              <div className=" card-body p-2">
                <p className="card-title">
                  <span className="text-rose-600">*</span>Tujuan
                </p>
                <p className="text-sm">Tujuan ke Middleware</p>
                <select
                  defaultValue={"DEFAULT"}
                  className="select w-full  rounded-none border-b-2 border-t-0 focus:outline-none border-r-0 border-l-0 border-black divide-y divide-slate-200 bg-transparent"
                  onChange={(e) => setTujuan(e.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Berkepentingan untuk...
                  </option>
                  <option value="Pemasangan Perangkat">
                    Pemasangan Perangkat
                  </option>
                  <option value="Pengecekan Perangkat">
                    Pengecekan Perangkat
                  </option>
                  <option value="Perawatan Perangkat">
                    Perawatan Perangkat
                  </option>
                  <option value="Pencopotan Perangkat">
                    Pencopotan Perangkat
                  </option>
                </select>
              </div>
            </div>
            <div className="card lg:w-3/4 w-5/6">
              <div className=" card-body p-2">
                <p className="card-title">
                  <span className="text-rose-600">*</span>Keterangan
                </p>
                <p className="text-sm">Keterangan Dari pemohon</p>
                <input
                  className="bg-transparent  text-black border-black focus:outline-none border-b-2"
                  type="text"
                  placeholder="Keterangan"
                  aria-label="Keterangan"
                  required
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>
            <div className="card lg:w-3/4 w-5/6">
              <div className=" card-body p-2 py-4">
                <p className="card-title">
                  <span className="text-rose-600">*</span>Waktu
                </p>
                <p className="text-sm pl-1">Pada tanggal {tanggalNow}</p>
                <div className="lg:flex lg:space-x-2 lg:space-y-0 space-y-4">
                  <p className="text-sm w-1/2 lg:m-auto">Dari Jam</p>
                  <input
                    className="bg-transparent  text-black border-black focus:outline-none border-b-2 lg:w-full w-3/4"
                    type="time"
                    placeholder="waktu"
                    aria-label="waktu"
                    required
                    readOnly
                    value={firstTime}
                  />
                  <p className="text-sm w-1/2 lg:m-auto">Sampai jam</p>
                  <input
                    className="bg-transparent  text-black border-black focus:outline-none border-b-2 lg:w-full w-3/4"
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
              href="#modal"
              className="btn btn-sm lg:w-2/3 w-4/5 bg-[#b85e5d] text-white border-none hover:bg-[#512827] hover:outline-3 space-y-2 "
            >
              submit
            </a>
            <div className="card w-full h-10 justify-center rounded-t-none bg-[#6f1d1b] shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)] rounded-md text-white text-center ">
              <p className="text-xs"> © 2022 Copyright: Dari Kita Untuk Kita</p>
            </div>
            {/* © 2022 Copyright: Dari Kita Untuk Kita */}
          </div>

          <div className="modal m-0" id="modal">
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
                <button className="btn w-full bg-[#6f1d1b] text-white border-none hover:bg-slate-400 hover:text-slate-800 hover:outline-3">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
