let indexCarousel = 0

let nextButton = document.querySelector('.next-arrow')
let prevButton = document.querySelector('.prev-arrow')

const nextItem = () => {
    // If the carousel index is at the last item, wrap to the first item (index 0)
    indexCarousel >= 3 ? indexCarousel = 0 : indexCarousel += 1
    changeItem(indexCarousel)
}
const prevItem = () => {
    // If the carousel index is at the first item, wrap to the last item (index 3)
    indexCarousel == 0 ? indexCarousel = 3 : indexCarousel -= 1
    changeItem(indexCarousel)
}


prevButton.addEventListener('click', prevItem)
nextButton.addEventListener('click', nextItem)


const changeItem = (index) => {
    // Select the carousel item based on the index
    const carouselItem = document.querySelectorAll(".benefit-item")[index]

    // Scroll to it with smooth behavior
    carouselItem.scrollIntoView({ behavior: "smooth" })
}

let changeCarousel
if (screen.width <= 600) {
    changeCarousel = setInterval(nextItem, 3000)
}

window.addEventListener('resize', () => {
    // On window resize it clears the interval. 
    // If the size of the screen is 600px or less it sets the interval.
    clearInterval(changeCarousel);
    if (screen.width <= 600) {
        changeCarousel = setInterval(nextItem, 3000)
    }
})
