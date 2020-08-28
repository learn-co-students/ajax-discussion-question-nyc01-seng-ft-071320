document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "https://randomuser.me/api/"
  const fullname = document.getElementById("fullname")
  const email = document.getElementById("email")
  const street = document.getElementById("street")
  const city = document.getElementById("city")
  const state = document.getElementById("state")
  const postcode = document.getElementById("postcode")
  const phone = document.getElementById("phone")
  const cell = document.getElementById("cell")
  const dob = document.getElementById("date_of_birth")
  const pic = document.getElementById("profile_picture")
  const button =  document.querySelector('.btn')
  
  button.addEventListener("click", function(e){
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => renderPeople(data.results))
  })

  const renderPeople = (people) => {
    for(person of people) {
      renderPerson(person)
    }
  }

  const renderPerson = (person) => {
    const human = {
      fullname: `${person.name.title}. ${person.name.first} ${person.name.last}`,
      email: person.email,
      street: `${person.location.street.number} ${person.location.street.name}`,
      city: person.location.city,
      state: person.location.state,
      postcode: person.location.postcode,
      phone: person.phone,
      cell: person.cell,
      dob: person.dob.date,
      pic: person.picture.large
    }
    domPerson(human)
  }

  const domPerson = (human) => {
    fullname.innerText = human.fullname
    email.innerText = human.email
    street.innerText = human.street
    city.innerText = human.city
    state.innerText = human.state
    postcode.innerText = human.postcode
    phone.innerText = human.phone
    cell.innerText = human.cell
    dob.innerText = human.dob
    pic.src = human.pic
  }

})

