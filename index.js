// Buidling a small project to refresh my knowledge in Javascript
// Although this code is my personal version, I would like to
// disclosed that I was inspired by a freecodecamp course on youtube
// that was thought by https://www.scrimba.com/. Thank you!
// document.getElementById("count-el").innerText=5

// Pseudo  Code for this mini project
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0
// countEl is a camelCase naming convention for Javascript.
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save () {
    let countStr = count + "-"
    saveEl.textContent += countStr
    countEl.textContent = 0 
    count = 0
}
console.log("Let's count people at the museum!")
