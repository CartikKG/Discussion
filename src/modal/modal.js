export default function modalClick() {
  if (document.getElementById("replyModa")) {
    document.getElementById("replyModa").id = "replyModal";
  } else {
    document.getElementById("replyModal").id = "replyModa";
  }
}
