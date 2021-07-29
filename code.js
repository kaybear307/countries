const COUNTRY_URL = "https://restcountries.eu/rest/v2/"

const main = document.body
const countryList = document.createElement('ul')
main.append(countryList)

const displayCountry = function (country) {
    const li = document.createElement('li')
    // Add country name to list
    li.innerHTML = country.name
    countryList.append(li)

    // Add flag to list
    const flag = document.createElement('img')
    flag.src = country.flag
    flag.alt = `${country.name}'s flag`
    li.append(flag)
    console.log(country)
}


const getALLCountries = function() {
fetch(COUNTRY_URL + "all")
    .then(response => response.json())
    .then(data => data
        .forEach(displayCountry))
}
// getALLCountries()

// Search
const input = document.createElement('input')
input.setAttribute(id = "input", "Search Input")
main.append(input)
const button = document.createElement('button')
button.setAttribute(id ="button", "Search!")
button.innerText = "Search!"
main.append(button)

const handleClick = function(event) {
    event.preventDefault()
    console.log(input.value)

    // Search API for input value
    let search_url = `${COUNTRY_URL}'s name ${input.value}`
    


    // clears the search bar
    input.value = ""
}

button.addEventListener("click", handleClick)