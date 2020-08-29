const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  btn=document.querySelector('button')
  btn.addEventListener('click',(e)=>{
    getPerson()
  })
});

const getPerson = () =>{
  fetch('https://randomuser.me/api/')
  .then(res=>res.json())
  .then(renderPerson)
}

function renderPerson (person){
  // console.log(person)
  // console.log(person["results"][0])
  // console.log(Object.keys(person["results"][0]))
  const extraction = person["results"][0]
  // console.log(extraction)
  //Keys in the obkect // ["gender", "name", "location", "email", "login", "dob", "registered", "phone", "cell", "id", "picture", "nat"]
  // needs on page   Name: Email: Street: City: State: Post Code: Phone: Cell: Date of Birth:
  faker={
    fullname: `${extraction.name.title}. ${extraction.name.first} ${extraction.name.last}`,
    email: extraction.email,
    street: `${extraction.location.street.number} ${extraction.location.street.name}`,
    city: extraction.location.city,
    state: extraction.location.state,
    postcode: extraction.location.postcode,
    phone: extraction.phone,
    cell: extraction.cell,
    dateOfBirth: extraction.dob.date,
    picture: extraction.picture.large
  }
    // console.log(faker)
    document.getElementById('fullname').innerText = faker.fullname
    document.getElementById('email').innerText = faker.email
    document.getElementById('street').innerText = faker.street
    document.getElementById('city').innerText = faker.city
    document.getElementById('state').innerText = faker.state
    document.getElementById('postcode').innerText = faker.postcode
    document.getElementById('phone').innerText = faker.phone
    document.getElementById('cell').innerText = faker.cell
    document.getElementById('date_of_birth').innerText = faker.dateOfBirth
    document.getElementById('profile_picture').parentNode.innerHTML=`<img src="${faker.picture}" alt="" id="profile_picture">` 
}

