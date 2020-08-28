const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(json => makeHuman(json.results[0]))

  function makeHuman(human) {
    person = {
      "fullname": human.name.title + ". " + human.name.first + " " + human.name.last,
      "email": human.email,
      "street": human.location.street.number.toString() + " " + human.location.street.name,
      "city": human.location.city,
      "state": human.location.state,
      "postcode": human.location.postcode,
      "phone": human.phone,
      "cell": human.cell,
      "dob": human.dob.date,
      "picture": human.picture.large
    }
    makePage(person)
  }

  function makePage(person) {
    document.getElementById('fullname').innerText = person.fullname
    document.getElementById('email').innerText = person.email
    document.getElementById('street').innerText = person.street
    document.getElementById('city').innerText = person.city
    document.getElementById('state').innerText = person.state
    document.getElementById('postcode').innerText = person.postcode
    document.getElementById('phone').innerText = person.phone
    document.getElementById('cell').innerText = person.cell
    document.getElementById('date_of_birth').innerText = person.dob
    let picture = document.getElementById('profile_picture')
    picture.src = person.picture
  }
});
