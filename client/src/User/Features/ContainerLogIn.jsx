import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch, useSelector } from "react-redux";
import ContainerMenuUser from "./ContainerMenuUser";

export const ContainerLogIn = () => {
  const auth = useSelector((state) => state.auth.auth);

  return (
    <>
      {Object.keys(auth) < 1 ? (
        <>
          <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
            <Link to="/formRegister">Register</Link>
          </button>
          <button className=" h-10 no-underline box-border bg-slate-900 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900">
            <Link to="/login">
              <LoginIcon /> Log In
            </Link>
          </button>
        </>
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
    </>
  );
};
