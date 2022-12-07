const hourElem = document.getElementById("hour");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const ampmElem = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1667826039296-d6a29bf3ce99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourElem.innerText = h;
    minutesElem.innerText = m;
    secondsElem.innerText = s;
    ampmElem.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000)

}

updateClock();