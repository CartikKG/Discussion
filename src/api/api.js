async function addUser(data) {
  let allUser = await getUser();
  let flag = false;
  allUser.forEach((element) => {
    if (element.useremail == data.useremail) {
      console.log(element)
      localStorage.setItem('user',JSON.stringify(element))
      flag = true;
    }
  });
  if (!flag) {
    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let res2 = await res.json();
      return "Added Succesfully";
    } catch (error) {
      console.log(error);
    }
  }
}
async function addComment(data) {
  try {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res2 = await res.json();
    console.log("Added Succesfully");
  } catch (error) {
    console.log(error);
  }
}
async function replyAdd(data) {
 try {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/comments/${data.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res2 = await res.json();
    console.log("Added Succesfully");
  } catch (error) {
    console.log(error);
  }
}
async function getUser() {
  try {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`);
    let res2 = await res.json();
    return res2;
  } catch (error) {
    console.log(error);
  }
}
async function getComment() {
  try {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/comments`);
    let res2 = await res.json();
    return res2;
  } catch (error) {
    console.log(error);
  }
}
export { addUser, getUser, getComment,addComment,replyAdd };
