const fullname = document.getElementById("fullname");
const name = document.getElementById('fullname')
const email = document.getElementById('email')
const street = document.getElementById('street')
const city = document.getElementById('city')
const state = document.getElementById('state')
const postcode = document.getElementById('postcode')
const phone = document.getElementById('phone')
const cell = document.getElementById('cell')
const dateOfBirth = document.getElementById('date_of_birth')


console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  fetch('https://randomuser.me/api/')
    .then(function(resp){
      return resp.json()
    }).then(function(jsonObj){
      createPerson(jsonObj['results'][0])
      console.dir(jsonObj['results'][0])
    })


    function createPerson(jsonObj){
      name.innerText = `${jsonObj['name']['title']} ${jsonObj['name']['first']} ${jsonObj['name']['last']}`
      email.innerText = `${jsonObj['email']}`
      street.innerText = `${jsonObj['location']['street']['number']} ${jsonObj['location']['street']['name']}`
      city.innerText = `${jsonObj['location']['city']}`
      state.innerText = `${jsonObj['location']['state']}`
      postcode.innerText = `${jsonObj['location']['postcode']}`
      phone.innerText = `${jsonObj['phone']}`
      cell.innerText = `${jsonObj['cell']}`
      dateOfBirth.innerText = `${jsonObj['dob']['date']}`
    }


});
