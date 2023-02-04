import React from "react";
import "../Style/home.css";
export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  function addComment(event) {
    if (event.key === "Enter") {
      console.log();

      let obj = {
        title: event.target.value,
        reply:[]
      };
    }
  }
  return (
    <>
      <div style={{ width: "100%" }}>
        <button
          style={{ background: "white", margin: "auto", padding: "7px" }}
          onClick={() => {
            localStorage.clear();
            window.reload();
          }}
        >
          Logout
        </button>
      </div>
      <div id="home">
        <label
          style={{
            display: "flex",
            alignItems: "center",
            margin: "auto",
            width: "70%",
          }}
        >
          <img
            src={user.profile}
            alt=""
            style={{
              width: "40px",
              height: "50px",
              borderRadius: "3px",
              margin: "5px",
            }}
          />
          <input
            type="text"
            onKeyPress={addComment}
            style={{ height: "30px", width: "100%" }}
            placeholder="Join the discussion..."
          />
        </label>
      </div>
    </>
  );
}
