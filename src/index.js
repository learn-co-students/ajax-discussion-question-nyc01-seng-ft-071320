const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const button = document.querySelector('.btn')
  const fullname = document.querySelector('#fullname')
  const email = document.querySelector('#email')
  const street = document.querySelector('#street')
  const city = document.querySelector('#city')
  const state = document.querySelector('#state')
  const postcode = document.querySelector('#postcode')
  const phone = document.querySelector('#phone')
  const cell = document.querySelector('#cell')
  const dateOfBirth = document.querySelector('#date_of_birth')
  const profilePicture = document.querySelector('#profile_picture')

  const getPerson = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(person => {
        const result = person.results[0]

        fullname.textContent = `${result.name.first} ${result.name.last}`
        email.textContent = result.email
        street.textContent = `${result.location.street.number}, ${result.location.street.name}`
        city.textContent = result.location.city
        state.textContent = result.location.state
        postcode.textContent = result.location.postcode
        phone.textContent = result.phone
        cell.textContent = result.cell
        dateOfBirth.textContent = result.dob.date
        profilePicture.src = result.picture.medium
      })
  }

  const clickHandler = () => {
    document.addEventListener('click', e => {
      if (e.target === button ) {
        getPerson()
      }
    })
  }


  clickHandler()
});
