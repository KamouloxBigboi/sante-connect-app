import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import useLogout from "../hooks/UseLogOut.js";
import axios from "axios";
import "../index.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:5000",
          {},
          { withCredentials: true }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else {
          toast(`Bonjour ${data.user}`, { theme: "dark" });
        }
      }
    };

    verifyUser();
  }, [cookies.jwt, navigate, removeCookie]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2> Votre tableau de bord </h2>
      <button onClick={useLogout}> Se déconnecter </button>
      <ToastContainer />
    </main>
  );
}