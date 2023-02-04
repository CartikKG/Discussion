import React,{useContext} from "react";
import Context from "../Context/context";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

export default function Allroutes() {
  const { isAuth, setisAuth } = React.useContext(Context);
  return <>{isAuth ? <Home /> : <Login />}</>;
}
