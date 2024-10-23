import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/logoOptera.png";
import verification from "../../hooks/handleVerification.jsx";
import { createContext } from "react";
function LoginView() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(""); // Message d'erreur initialisé vide
  const [authenticated,setAutothenticated]=useState(true);
  const [Ids, setIds] = useState({
    mail: "",
    password: "",
  });

  const handleProfileVerif = () => {
    localStorage.setItem("MAIL", Ids.mail);
    localStorage.setItem("PASSWORD", Ids.password);
  };
  return (
    <div className="bg-white w-[500px] min-h-[400px] h-fit px-[45px] py-[20px] flex flex-col items-center gap-3 ">
      <div id="presentationBlock" className=" min-w-[200px] w-fit h-fit flex flex-col gap-3 items-center">
        <img src={logo} className="w-[150px]" alt="Optera logo" />
        <p className="text-titles font-title text-[18px] max-w-[300px] text-center font-semibold">
          Connectez-vous au tableau de bords Optera
        </p>
      </div>

      <div className="w-full h-fit">
        <p id="errorMessage" className="text-[10px] text-negative font-titles mt-2">
          {/* {localStorage.getItem("ERROR_MESSAGE")} */}
          {errorMessage}
        </p>
      </div>

      <form action="#" method="POST" className="w-full flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="mailInput" className="text-[14px] font-title text-titles font-semibold">
            Email
          </label>
          <input
            type="email"
            id="mailInput"
            onChange={(e) => {setIds({ ...Ids, mail: e.target.value })
            }}
            className="focus:border-[#0D0D0] focus:transition-colors focus:duration-150 text-[#0D0D0D] bg-transparent w-full h-[50px] mt-2 border-[1px] border-gray-200 rounded-lg py-2 px-2 font-content text-[13px] placeholder:text-[13px] placeholder:font-content"
            placeholder="Entrez votre email ici"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="PwInput" className="text-[14px]  font-title text-titles font-semibold">
            Mot de passe
          </label>
          <input
            type="password"
            id="PwInput"
            onChange={(e) => setIds({ ...Ids, password: e.target.value })}
            className="w-full bg-transparent text-[#0D0D0D] h-[50px] mt-2 border-[1px] border-gray-200 rounded-lg py-2 px-2 font-content text-[13px] placeholder:text-[13px] placeholder:font-content focus:border-[#0D0D0] focus:transition-colors focus:duration-150"
            placeholder="Entrez votre mot de passe ici"
            autoComplete="off"
          />
        </div>

        <button
          type="button"
          onClick={() => {
            handleProfileVerif();
            const verified = verification(Ids.mail, Ids.password);
            if (verified) {
              console.log(verified);
              if (verified.ROLE === "admin") {
                console.log("l'admin veut se connecter ");
                navigate('/dashboard');
              } else {
                console.log("un non admin veut se connecter");
                setErrorMessage("Identifiants incorrects");
                navigate('/login')
              }
            } else {
              setErrorMessage("Entrez vos identifiants s'il vous plaît");
            }
          }}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md mt-4 bg-gray-200 text-titles font-title text-[14px] hover:bg-primary hover:text-slate-50 border-none"
        >
          Commencer
        </button>
      </form>
    </div>
  );
}

export default LoginView;
