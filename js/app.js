const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/1.jpeg" },
  { name: "Voluptatem", image: "images/3.jpeg" },
  { name: "Explicabo", image: "images/2.webp" },
]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)