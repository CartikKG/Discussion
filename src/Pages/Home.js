import React, { useEffect } from "react";
import "../Style/home.css";
import { addUser, getUser, getComment } from "../api/api";
import Context from "../Context/context";
import Comment from "../Components/Comment";

export default function Home() {
  const { data, setData, setisAuth } = React.useContext(Context);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getComment().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);
  function addComment(event) {
    if (event.key === "Enter") {
      console.log();
      let obj = {
        title: event.target.value,
        reply: [],
      };
    }
  }
  const newLocal = "commentInput";
  return (
    <>
      <div style={{ width: "100%" }}>
        <button
          style={{
            background: "white",
            margin: "10px",
            padding: "7px",
            borderRadius: "10px",
            cursor: "pointer",
            color: "white",
            backgroundColor: "black",
          }}
          onClick={() => {
            setisAuth(false);
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
          <img src={user.userProfile} alt="" className="commentImg" />
          <input
            type="text"
            className="commentInput"
            onKeyPress={addComment}
            placeholder="Join the discussion..."
          />
        </label>
        <div>
          {data.map((el) => {
            return (
              <>
                <Comment
                  img={el.userProfile}
                  name={el.username}
                  date="7 hour"
                  content={el.content}
                />
                <div style={{width:"90%",marginLeft:"8%"}}>
                  {el.reply.map((el) => {
                    return (
                      <Comment
                        img={el.userProfile}
                        name={el.username}
                        content={el.content}
                      />
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
