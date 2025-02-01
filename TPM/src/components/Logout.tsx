import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";
import logoutIcon from "../assets/logout.png";

const Logout = () => {
  const navigate = useNavigate();
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isSuccessToastOpen, setIsSuccessToastOpen] = useState(false);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("access_token");
      setIsToastOpen(false);
      setIsSuccessToastOpen(true);
      navigate("/login")
      window.location.reload(); // Refresh halaman setelah 1 detik
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const openToast = () => setIsToastOpen(true);
  const closeToast = () => setIsToastOpen(false);

  useEffect(() => {
    if (isSuccessToastOpen) {
      navigate("/login")
    }
  }, [isSuccessToastOpen, navigate]);

  return (
    <>
      <button
        onClick={openToast}
        className="top-4 right-4 border-none text-white transition-all duration-300 ease-in-out"
      >
        <div
          className="ml-[43px] border-2 w-[140px] h-[40px] z-20 rounded-[16px] justify-center items-center
                hover:border-[#ffff] hover:scale-105 hover:shadow-md hover:shadow-[#ffff]/50 
                active:border-[#ffff] active:scale-100 active:shadow-xl active:shadow-[#ffff]"
        >
          <div className="flex justify-normal p-[3px] gap-5 items-center">
            <img src={logoutIcon} alt="logout" />
            <p className="text-[19px] font-medium">Logout</p>
          </div>
        </div>
      </button>

      <Toast
        open={isToastOpen}
        onClose={closeToast}
        onConfirm={handleLogout}
      >
        Are you sure you want to logout?
      </Toast>

      <Toast
        open={isSuccessToastOpen}
        onClose={() => setIsSuccessToastOpen(false)}
      >
        Logout successful! Redirecting...
      </Toast>
    </>
  );
};

export default Logout;
