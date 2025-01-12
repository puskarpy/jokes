let display = document.querySelector('.display-jokes')
let getJokes = document.querySelector('.get-joke')
let typeOptions = document.querySelector('#type-options')

function fetchJoke(jokeType) 
{
fetch(`https://v2.jokeapi.dev/joke/${jokeType}`)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    if(data.type == "twopart"){
        display.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`
    }
    else if(data.type == "single"){
        display.innerHTML = `<p>${data.joke}</p>`
    }
    else{
        display.innerHTML = `<p>Couldn't fetch Joke.</p>`
    }
})
}

getJokes.addEventListener('click',()=>{
    let selectedValue = typeOptions.value 
    if(selectedValue){
        fetchJoke(selectedValue)
    }
    else{
        display.innerHTML = "<p>Select a option</p>"
    }
})

