const hour = document.getElementById('hour')
const min = document.getElementById('minutes')
const second = document.getElementById('seconds')
const ampmEl = document.getElementById('ampm')
const day = document.getElementById('days')
const month = document.getElementById('months')
const year = document.getElementById('years')

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = 'AM'
    let dd = new Date().getDate()
    let mm = new Date().getMonth()
    let yyyy = new Date().getFullYear()

    if(h >= 12){
        h = h - 12
        ampm = 'PM'
    }

    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s


    hour.innerText = h
    min.innerText = m
    second.innerText = s
    ampmEl.innerText = ampm
    day.innerText = dd
    month.innerText = mm
    year.innerText = yyyy
    setTimeout (() => {
        updateClock()
    }, 1000);
}
updateClock()