


let homeTeamCounter = 0
let guestTeamCounter = 0

function incrementHomeByOne() {
    homeTeamCounter += 1
    document.getElementById("points-home").textContent = homeTeamCounter
}

function incrementHomeByTwo() {
    homeTeamCounter += 2
    document.getElementById("points-home").textContent = homeTeamCounter
}

function incrementHomeByThree() {
    homeTeamCounter += 3
    document.getElementById("points-home").textContent = homeTeamCounter
}

function incrementGuestByOne() {
    guestTeamCounter += 1
    document.getElementById("points-guest").textContent = guestTeamCounter
}

function incrementGuestByTwo() {
    guestTeamCounter += 2
    document.getElementById("points-guest").textContent = guestTeamCounter
}

function incrementGuestByThree() {
    guestTeamCounter += 3
    document.getElementById("points-guest").textContent = guestTeamCounter
}

function startGame() {
    homeTeamCounter = 0
    guestTeamCounter = 0
    document.getElementById("points-guest").textContent = guestTeamCounter
    document.getElementById("points-home").textContent = homeTeamCounter
}