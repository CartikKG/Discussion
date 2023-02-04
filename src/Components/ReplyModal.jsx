import React from "react";
import "../Style/ReplyModal.css";
import { BiXCircle } from "react-icons/bi";
import modalClick from "../modal/modal";
const ReplyModal = () => {
  return (
    <div id="replyModal">
      <BiXCircle onClick={modalClick} />
      <form action="">
        <input type="text" required={true} id="replyModal" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReplyModal;
