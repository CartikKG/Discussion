import React from "react";
import "../Style/ReplyModal.css";
import { BiCloudLightRain, BiXCircle } from "react-icons/bi";
import modalClick from "../modal/modal";
import { replyAdd } from "../api/api";
const ReplyModal = ({replyOne,storeComments}) => {
  const user=JSON.parse(localStorage.getItem('user'));
  

  return (
    <div id="replyModa">
      <div action="" >
      <BiXCircle onClick={modalClick} style={{position:"absolute" ,fontSize:"40px",right:"0%",marginTop:"-40px" ,color:"white"}}/>
        <input type="text" required={true} id="replyModalInput" />
        <button onClick={async()=>{await modalClick();await replyAdd({...replyOne,reply:[ ...replyOne.reply,{...user,content:document.getElementById('replyModalInput').value,reply:[]}]})  ; await storeComments()}  } >Submit</button>
      </div>
    </div>
  );
};

export default ReplyModal;
