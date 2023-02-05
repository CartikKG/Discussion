import React from "react";
import "../Style/ReplyModal.css";
import { BiXCircle } from "react-icons/bi";
import modalClick from "../modal/modal";
const ReplyModal = () => {
  return (
    <div id="replyModa">
      <form action="" >
      <BiXCircle onClick={modalClick} style={{position:"absolute" ,fontSize:"40px",right:"0%",marginTop:"-40px" ,color:"white"}}/>
        <input type="text" required={true} id="replyModalInput" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReplyModal;
