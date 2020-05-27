const url = 'https://achtungcthulhu.herokuapp.com/skills'

function Fetch(){
fetch(url)
.then(response => response.json() )
.then(data => {

  let element = document.getElementById('element')
  element.innerHTML = `<p>${data.name}</p>`
  console.log(data)
})
.catch(err=>console.log(err))
}