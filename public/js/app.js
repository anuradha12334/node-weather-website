const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')


weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent=''
  
    fetch('http://localhost:3000/weather?latitude=37.8267&longitude='+ location).then((response) => {
    response.json().then((data) => {
        if(data.error)
        {
            messageOne.textContent=data.error    
        }
        else{
        messageOne.textContent= JSON.stringify(data)
        console.log(data)
        }
    })
})
})