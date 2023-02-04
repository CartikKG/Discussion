import React, { useState } from "react";
import "../Style/comment.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
const Comment = ({ img, content, name, date }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="comment">
      <img className="commentImg" src={img} alt="" />
      <div className="commentinner">
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <h4 style={{ color: "rgb(71 184 255)" }}>{name}</h4>
          <p style={{ color: "grey", fontSize: "13px" }}>{date} </p>
        </div>
        <div className="commentContent"> {content}</div>
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
          <button className="btn">Reply</button>
          <button className="btn">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
