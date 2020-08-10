

let cardTemplate = 
`
 <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `

let containerTag = document.querySelector('.container-fluid')
// let container1 = document.querySelector('.row')

let columnContent = 
`<div class="col-sm">
    One of three columns
</div>`

let counter = 0
let totalRows = Math.ceil(countryWithImages.length/4)

for (let row = 0; row < totalRows; row++){
    // creating a row
    let rowTag = document.createElement("div")
    rowTag.setAttribute("class", "row")
    

    //creating a column
    for (let column = 0; column < 3; column++) {
        let columnTag = document.createElement("div")
        columnTag.setAttribute("class", "col-sm")
        //  columnTag.textContent = cardTemplate

        let cardTag = document.createElement("div")
        cardTag.setAttribute("class", "card")
        cardTag.setAttribute("id", "flag" + counter)

        let imgTag = document.createElement("img")
        imgTag.setAttribute("class", "card-img-top")
        // imgTag.src = "https:" + countryWithImages[row].file_url
        imgTag.setAttribute("src", " https:" + countryWithImages[counter].file_url )

        let cardBodyTag = document.createElement("div")
        cardBodyTag.setAttribute("class", "card-body")

        let cardTitleTag = document.createElement("h5")
        cardTitleTag.setAttribute("class", "card-title")
        cardTitleTag.textContent = countryWithImages[counter].name

        cardBodyTag.appendChild(cardTitleTag)
        
        cardTag.appendChild(imgTag)
        cardTag.appendChild(cardBodyTag)

        columnTag.appendChild(cardTag)

        counter++

        rowTag.appendChild(columnTag) // attach column to row
        
    }

    containerTag.appendChild(rowTag)

}
// container.appendChild(container1)



document.addEventListener("click", (e) => {
    
    let url  = "https://en.wikipedia.org/wiki/"
    let countryName = e.target.textContent

    let wikiURL = url + countryName

    console.log(wikiURL)
    window.open(wikiURL)


})