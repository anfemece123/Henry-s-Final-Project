import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { clearCart } from "../../Redux/Reducer/cartSlice";
import { logout } from "../../Redux/Reducer/authSlice";
import { useDispatch, useSelector } from "react-redux";
import ContainerMenuUser from "./ContainerMenuUser.jsx";

export const ContainerLogIn = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);

  return (
    <div className="w-full h-fit items-center flex gap-4">
      {Object.keys(auth) < 1 ? (
        <div className="w-full h-fit items-center flex gap-4">
          <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
            <Link to="/formRegister">Register</Link>
          </button>
          <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
            <Link to="/login">
              <LoginIcon /> Log In
            </Link>
          </button>
        </div>
      ) : (
        <div className="w-full h-fit items-center flex gap-4">
          <ContainerMenuUser />
          {/* <button
            onClick={logOutSubmit}
            className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900"
          >
            <LogoutIcon /> Log out
          </button> */}
        </div>
      )}
    </div>
  );
};

export default ContainerLogIn;
