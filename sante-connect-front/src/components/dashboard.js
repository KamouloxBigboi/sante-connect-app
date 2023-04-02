import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import useCookies from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


export default function Dashboard () {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyUser = async () => {
      if(!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:5000",
          {}, 
          {withCredentials: true}); 
      };
      if(!data.status) {
        removeCookie("jwt");
        navigate("/login");
      } else toast(`Bonjour ${data.user}`, {theme: "dark"});
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/register");
  };
    return (
      <>
        <main className="private" style={{ padding: "1rem 0" }}>
          <h2> Bienvenue sur Santé Connect ! </h2>
          <button onClick={(logOut)}> Se déconnecter </button>
          <ToastContainer/>
        </main>
      </>
    );
  }