import React, { useState } from "react";
import "../Style/comment.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import modalClick from "../modal/modal";
const Comment = ({data, setReply}) => {
  const [count, setCount] = useState(0);
  return (
    <div className="comment">
      <img className="commentImg" src={data.userProfile} alt="" />
      <div className="commentinner">
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <h4 style={{ color: "rgb(71 184 255)" }}>{data.username}</h4>
          <p style={{ color: "grey", fontSize: "13px" }}>{data.date} </p>
        </div>
        <div className="commentContent"> {data.content}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <span style={{ fontSize: "15px" }}> {count}</span>
          <BiChevronUp
            className="btn"
            onClick={() => {
              setCount((pre) => pre + 1);
            }}
            style={{ borderRight: "1px solid grey" }}
          />
          <BiChevronDown
            className="btn"
            onClick={() => {
              setCount((pre) => pre - 1);
            }}
          />

          <button className="btn" onClick={()=>{console.log(setReply); modalClick();}}>Reply</button>
          <button className="btn">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
