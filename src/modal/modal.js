export default function modalClick() {
  if (document.getElementById("replymoda")) {
    document.getElementById("replymoda").id = "replymodal";
  } else {
    document.getElementById("replymodal").id = "replymoda";
  }
}
