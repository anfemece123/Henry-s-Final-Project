import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Features/NavBar";
import { logIn } from "../../../Redux/actions/index";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import { errorRemove, setAuth } from "../../../Redux/Reducer/authSlice";

export default function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [input, setInput] = useState({
    email: "",
    password: "",
  });
  const errorAuth = useSelector((state) => state.auth.errorAuth);
  console.log("errorAuth", errorAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(input));
    if (errorAuth) {
      swal({
        title: "Error!",
        text: errorAuth,
        icon: "error",
        buttons: {
          defeat: true,
        },
      });
    } else {
      // dispatch(logIn(input));
      navigate("/home");
    }
  };
  useEffect(() => {
    if (errorAuth?.length === 0) return;
  }, [errorAuth]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-slate-800 min-h-screen min-w-screen flex">
      <div className="absolute w-screen">
        <NavBar />
      </div>
      <div className="bg-slate-900 border border-slate-900 h-[42rem] w-[40rem] rounded-lg m-auto shadow-2xl shadow-slate-300 hover:shadow-2xl hover:shadow-green-400">
        <div className="grid grid-cols-5">
          <div className="text-white col-span-5 text-center mt-5 font-cursive-titles uppercase text-5xl">
            <h1>Welcome back!</h1>
          </div>
          <div className="text-white text-center col-span-5 mt-5 font-noto-serif uppercase">
            <h3>Sing In to your account</h3>
          </div>
          <div className="col-span-5 text-black text-center mt-20">
            <input
              className="text-center font-noto-serif w-80 rounded-lg h-8 bg-slate-700 focus:outline focus:outline-offset-2 focus:outline-blue-600"
              type="text"
              name="email"
              value={input.email}
              placeholder="Your user email"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-span-5 text-black text-center mt-20">
            <input
              className="text-center font-noto-serif w-80 rounded-lg h-8 bg-slate-700 focus:outline focus:outline-offset-2 focus:outline-blue-600"
              type="password"
              value={input.password}
              name="password"
              placeholder="Your password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-span-5 text-white ml-20 mt-10 font-noto-serif text-lg">
            <div className="flex items-center justify-around">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-5 h-5 accent-blue-600" />
                <label>Remember me</label>
              </div>
              <div>
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline text-blue-600"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-5 text-white font-noto-serif text-2xl m-auto text-center">
            <div className="mt-20 flex justify-center border border-slate-700 rounded-full w-80 h-10 transition ease-in-out delay-150 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              <button onClick={handleSubmit}>LET ME IN!</button>
            </div>
          </div>

          <div className="text-white mt-10 col-span-5 m-10">
            <hr />
          </div>
          <div className="col-span-5 text-white flex justify-center gap-10">
            <div className="transition ease-in-out delay-150 bg-slate-800 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-2xl w-48 h-9 flex justify-center">
              <button>Log in with Google</button>
            </div>
            <div className="transition ease-in-out delay-150 bg-slate-800 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-2xl w-48 h-9 flex justify-center">
              <button>Log in with LinkedIn</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
