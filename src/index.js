

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const fullname = document.getElementById("fullname");


  function getUser () {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(user => {
      renderUser(user.results);
    })
  }

  function renderUser(user) {
    console.log(user)
    fullname.innerText = `${user[0].name.title}. ${user[0].name.first} ${user[0].name.last}`; 
  }



  getUser();
})
