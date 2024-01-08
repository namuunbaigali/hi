// Import necessary libraries
import React, { useState } from "react";
import ReactPlayer from "react-player";
import pig from "../assets/other/pig.png";
import letsgo from "../assets/other/letsgo.png";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("Хөөрхөнөө");
  const [password, setPassword] = useState("2021-08-05");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);

    if (username.trim() === "Хөөрхөнөө" && password.trim() === "2021-08-05") {
      setUsername("");
      setPassword("");
      onLogin();
    } else {
      console.log("Incorrect username or password");
    }
  };

  const handleLoginClick = () => {
    onLogin();
    alert("Нэвтрэх хэсгийн дээр орших зурагнууд тус бүрд дарж үзээгүй юм биш биз");
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto shadow-xl shadow-gray-400 my-5 bg-[#e4eff8] rounded-3xl">
      <div className="flex flex-col items-center justify-center md:p-10">
        <div className="flex items-center">

        <a
          href={pig}
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-24 h-24 mr-2 xs:w-20 xs:h-20" src={pig} alt="logo" />
          {/* <a href="https://www.fontspace.com/category/cute"><img src="https://see.fontimg.com/api/renderfont4/la1w/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SHV1cmh1bnV1/balonku-regular.png" alt="Cute fonts"/></a> */}
        </a>
          <a href="https://drive.google.com/file/d/1D75uZxhGO8YERb_MrumLOZ1z02N4caZp/view?usp=drive_link">
            <img
              src="https://see.fontimg.com/api/renderfont4/la1w/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SHV1cmh1bnV1/balonku-regular.png"
              alt="Pretty fonts"
              className="h-16 w-72 xs:h-12 xs:w-64"
            />
          </a>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Хамгийн сайхан нь
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Заасан үгийг минь бичээрэй
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-slate-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Хөөрхөнөө && Гүнжтээн"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Үерхсэн өдрөө бичээрэй
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="yyyy-mm-dd"
                  className="bg-gray-50 border border-slate-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
              type="submit"
                onClick={handleLoginClick}
                className="w-full p-2 border rounded-xl border-slate-300"
                
              >
            
                {/* <img src={letsgo} alt="letsgo" className="w-12 h-12" /> */}
                Нэвтрэх
              </button>
            </form>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto rounded-2xl lg:py-0 ">
         <ReactPlayer
          ` url="https://drive.google.com/uc?id=1847xgoCoZqGo4nUT9NU8f2K5yyxyGzc9"
            controls={true}
            width="100%"
            height="60%"
          /> 
          `
        </div> */}
      </div>

      <div className="flex flex-col items-center justify-center m-auto text-5xl italic leading-relaxed text-start md:p-10 xs:py-4">
        <button className=" text-start m-auto text-[1.8rem] xs:text-lg xs:gap-2   flex flex-col w-full items-center justify-center leading-relaxed italic  mx-auto lg:py-0  container  grid-cols-2 md:grid-cols-2 gap-8  rounded-2xl">
          Чи уул юмаа гэхэд <br />
          Чиний цаана уул байхгүй юм шиг <br />
          Чи ус юмаа гэхэд <br />
          Чамаас өөр мөрөн байхгүй юм шиг
          <br />
          Би чамайг хайрласан сан . . .<br />
          Амь тавин хайрласан
          <br />
          Ганц эмзэг минь . . .<br />
          Алганы минь хээг дагаж бөмбөрсөн <br />
          Ганц сувд минь . . .<br />
        </button>
      </div>
    </div>
  );
};

export default Login;
