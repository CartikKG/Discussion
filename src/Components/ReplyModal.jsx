import React from "react";
import "../Style/ReplyModal.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
const ReplyModal = () => {
  return (
    <div id="replyModal">
      <form action="">
        <input type="text" required={true} id="replyModal" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReplyModal;
