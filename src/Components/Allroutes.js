import React from "react";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

export default function Allroutes() {
  const user = localStorage.getItem("user");
  return <>{user ? <Home /> : <Login />}</>;
}
