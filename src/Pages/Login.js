import React from "react";
import "../Style/Login.css";
export default function Login() {
  function saveUser() {
    const name = document.getElementById("name").value;
    const profile = document.getElementById("profile").value;
    const email = document.getElementById("email").value;
    if (name == "" || profile == "") {
      alert("fill the details");
    } else {
      localStorage.setItem("user", JSON.stringify({ name, email, profile }));
    }
  }
  return (
    <div>
      <form action="">
        <h1> Go to Discussion</h1>
        <input type="text" required placeholder="Enter Your Name" id="name" />
        <input type="email" required placeholder="Enter Your Email" id="email" />
        <input type="text" required placeholder="Enter Profile Url" id="profile" />
        <input type="submit" onClick={saveUser} />
      </form>
    </div>
  );
}
