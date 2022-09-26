let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let homeScore = 0
let guestScore = 0

function add1Home() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
}

function add2Home() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
}

function add3Home() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

function add1Guest() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
}

function add2Guest() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
}

function add3Guest() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
}

function newGame() {
    homeScoreEl.innerText = 0
    guestScoreEl.innerText = 0
    homeScore = 0
    guestScore = 0
}