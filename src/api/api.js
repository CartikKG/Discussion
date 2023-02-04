async function addUser(data) {
  let allUser = await getUser();
  // console.log(allUser)
  let flag = false;
  allUser.forEach((element) => {
    if (element.useremail == data.useremail) {
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
export { addUser,getUser,getComment };
