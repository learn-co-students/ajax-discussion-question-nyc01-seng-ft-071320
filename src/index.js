document.addEventListener('DOMContentLoaded', e => {
  const clickHandler = () => {
    document.querySelector("button").addEventListener("click", e => {
      fetch("https://randomuser.me/api/")
      .then(resp => resp.json)
      .then(data => {
        const user = data.results
        renderUser(user)
      })
    })
  }

  const renderUser = user => {
    console.log(user)

    const picture = user.picture.large
    document.querySelector("#profile_picture").src = picture


    const title = user.name.title
    const firstName = user.name.first
    const lastName = user.name.last

    document.querySelector('#fullname').textContent = `${title} ${firstName} ${lastName}`

    const email = user.email
    document.querySelector("#email").textContent = email

  }
  clickHandler()
})