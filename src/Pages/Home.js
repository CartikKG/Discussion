import React, { useEffect, useState } from "react";
import "../Style/home.css";
import { addUser, getUser, getComment, addComment } from "../api/api";
import Context from "../Context/context";
import Comment from "../Components/Comment";
import ReplyModal from "../Components/ReplyModal";

export default function Home() {
  const { data, setData, setisAuth } = React.useContext(Context);
  const [replyOne, setReply] = useState({});

  const user = JSON.parse(localStorage.getItem("user"));
  async function storeComments() {
    console.log("kjkkj");
    let res = await getComment();
    setData(res);
  }
  useEffect(() => {
    storeComments();
  }, []);

  async function addCom(event) {
    if (event.key === "Enter") {
      await addComment({ ...user, content: event.target.value, reply: [] });
      let res = await getComment();
      setData(res);
      event.target.value="";
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
            onKeyPress={addCom}
            placeholder="Join the discussion..."
          />
        </label>
        <div>
          {data.map((el) => {
            return (
              <>
                <Comment data={el} replyflg={false} setReply={setReply} />
                <div style={{ width: "90%", marginLeft: "8%" }}>
                  {el.reply.map((el) => {
                    return (
                      <Comment replyflg={true} data={el} setReply={setReply} />
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
      <ReplyModal replyOne={replyOne} storeComments={storeComments} />
    </>
  );
}
