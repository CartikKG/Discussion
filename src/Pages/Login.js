import React, { useContext } from "react";
import "../Style/Login.css";
import { addUser, getUser } from "../api/api";
import Context from "../Context/context";
export default function Login() {
  const { setisAuth } = React.useContext(Context);
  async function saveUser(event) {
    event.preventDefault();
    const username = document.getElementById("name").value;
    const userProfile = document.getElementById("profile").value;
    const useremail = document.getElementById("email").value;
    let res = await addUser({ username, userProfile, useremail });
    setisAuth(true);
    localStorage.setItem(
      "user",
      JSON.stringify({ username, userProfile, useremail })
    );
  }
  return (
    <div id="login">
      <form action="" onSubmit={saveUser}>
        <h1> Go to Discussion</h1>
        <input
          className="Logininput"
          type="text"
          required
          placeholder="Enter Your Name"
          id="name"
        />
        <input
          className="Logininput"
          type="email"
          required
          placeholder="Enter Your Email"
          id="email"
        />
        <input
          className="Logininput"
          type="text"
          required
          placeholder="Enter Profile Url"
          id="profile"
        />
        <input type="submit"  id="submit" />
      </form>
    </div>
  );
}
