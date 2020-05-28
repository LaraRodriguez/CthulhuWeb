const url = 'https://achtungcthulhu.herokuapp.com'

function Fetch() {
  fetch(url)
    .then(response => response.json())
    .then(data => {

      let element = document.getElementById('element')
      element.innerHTML = `<p>${data.name}</p>`
      console.log(data)
    })
    .catch(err => console.log(err))
}

function personal_button() {
  fetch('https://achtungcthulhu.herokuapp.com/personalsheet')
    .then(response => response.json())
    .then(data => {

      let element = document.getElementById('element')
      element.innerHTML = `
      <p>${data.name}</p>
      <p>${data.description}</p>`;
      console.log(data)
    })
    .catch(err => console.log(err))
}

function skill_button() {
  fetch('http://www.dnd5eapi.co/api/spells/acid-arrow')
    .then(response => response.json())
    .then(data => {
      let element = document.getElementById('element')
      element.innerHTML = `
      <p>${data.name}</p>
      <p>${data.desc}</p>`;
      console.log(data)
    })
    .catch(err => console.log(err))
}

function equipement_button() {
  fetch('https://achtungcthulhu.herokuapp.com/equipement')
    .then(response => response.json())
    .then(data => {

      let element = document.getElementById('element')
      element.innerHTML = `
      <p>${data.name}</p>
      <p>${data.description}</p>`;
      console.log(data)
    })
    .catch(err => console.log(err))
}

function nacionality_button() {
  fetch('https://achtungcthulhu.herokuapp.com/nacionality')
    .then(response => response.json())
    .then(data => {

      let element = document.getElementById('element')
      element.innerHTML = `
      <p>${data.name}</p>
      <p>${data.description}</p>`;
      console.log(data)
    })
    .catch(err => console.log(err))
}

function weapon_button() {
  fetch('https://achtungcthulhu.herokuapp.com/weapons')
    .then(response => response.json())
    .then(data => {

      let element = document.getElementById('element')
      element.innerHTML = `
      <p>${data.name}</p>
      <p>${data.description}</p>`;
      console.log(data)
    })
    .catch(err => console.log(err))
}

function job_button(){
  fetch('https://achtungcthulhu.herokuapp.com/jobs')
  .then(response => response.json() )
  .then(data => {
  
    let element = document.getElementById('element')
    element.innerHTML = `
    <p>${data.name}</p>
    <p>${data.description}</p>`;
    console.log(data)
  })
  .catch(err=>console.log(err))
}

function mentalill_button(){
  fetch('https://achtungcthulhu.herokuapp.com/mentalillnesses')
  .then(response => response.json() )
  .then(data => {
  
    let element = document.getElementById('element')
    element.innerHTML = `
    <p>${data.name}</p>
    <p>${data.description}</p>`;
    console.log(data)
  })
  .catch(err=>console.log(err))
}

function myth_button(){
  fetch('https://achtungcthulhu.herokuapp.com/myths')
  .then(response => response.json() )
  .then(data => {
  
    let element = document.getElementById('element')
    element.innerHTML = `
    <p>${data.name}</p>
    <p>${data.description}</p>`;
    console.log(data)
  })
  .catch(err=>console.log(err))
}

function sanity_button(){
  fetch('https://achtungcthulhu.herokuapp.com/sanity')
  .then(response => response.json() )
  .then(data => {
  
    let element = document.getElementById('element')
    element.innerHTML = `
    <p>${data.name}</p>
    <p>${data.description}</p>`;
    console.log(data)
  })
  .catch(err=>console.log(err))
  }