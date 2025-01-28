import { useNavigate } from "react-router-dom";
import axios from "../config/instance"; // pastikan path axios instance sesuai
import logoutIcon from "../assets/logout.png";

const Logout = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleLogout = async () => {
    try {
      localStorage.removeItem("access_token");

      // Redirect ke halaman login setelah logout
      navigate("/login"); // Ubah jika kamu ingin mengarahkan ke halaman lain
    } catch (error) {
      console.error("Logout failed", error);
      // Menampilkan pesan kesalahan atau penanganan lainnya jika diperlukan
    }
  };

  return (
    <>
      <button
          onClick={handleLogout}
          className="absolute top-4 right-4 border-none text-white transition-all duration-300 ease-in-out" 
          >
          <div className="ml-[43px] border-2 w-[140px] h-[40px] z-20 rounded-[16px] justify-center items-center
                hover:border-[#ffff] hover:scale-105 hover:shadow-md hover:shadow-[#ffff]/50 
                active:border-[#ffff] active:scale-100 active:shadow-xl active:shadow-[#ffff]">
            <div className="flex justify-normal p-[3px] gap-5 items-center">
            <img src={logoutIcon} alt="logout" />
            <p className="text-[19px] font-medium">Logout</p>
            </div>

          </div>
        </button>
    </>
  );
};

export default Logout;
