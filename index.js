let info;
// requist
fetch("data.json")
.then(response => {
   return response.json();
})
.then(data => load(data))
// onload function that assigns return value to variable that i can use later
const workCurrent = document.querySelector('#workCurrent')
const playCurrent = document.querySelector('#playCurrent')
const studyCurrent = document.querySelector('#studyCurrent')
const exerciseCurrent = document.querySelector('#exerciseCurrent')
const socialCurrent = document.querySelector('#socialCurrent')
const selfCareCurrent = document.querySelector('#SelfCareCurrent')
const workPast = document.querySelector('#workPast')
const playPast = document.querySelector('#playPast')
const studyPast = document.querySelector('#studyPast')
const exercisePast = document.querySelector('#exercisePast')
const socialPast = document.querySelector('#socialPast')
const selfCarePast = document.querySelector('#selfCarePast')
const optionPs = document.querySelectorAll('.optionP')
const weekly = () => {
    workCurrent.innerText = `${info[0].timeframes.weekly.current}hrs`
    playCurrent.innerText = `${info[1].timeframes.weekly.current}hrs`
    studyCurrent.innerText = `${info[2].timeframes.weekly.current}hrs`
    exerciseCurrent.innerText = `${info[3].timeframes.weekly.current}hrs`
    socialCurrent.innerText = `${info[4].timeframes.weekly.current}hrs`
    selfCareCurrent.innerText = `${info[5].timeframes.weekly.current}hrs`
    workPast.innerText = ` Last Week - ${info[0].timeframes.weekly.previous}hrs`
    playPast.innerText = ` Last Week - ${info[1].timeframes.weekly.previous}hrs`
    studyPast.innerText = ` Last Week - ${info[2].timeframes.weekly.previous}hrs`
    exercisePast.innerText = ` Last Week - ${info[3].timeframes.weekly.previous}hrs`
    socialPast.innerText = ` Last Week - ${info[4].timeframes.weekly.previous}hrs`
    selfCarePast.innerText = ` Last Week - ${info[5].timeframes.weekly.previous}hrs`
}

const load = (data) =>{
    info = data
    weekly()
}
const daily = () => {
    workCurrent.innerText = `${info[0].timeframes.daily.current}hrs`
    playCurrent.innerText = `${info[1].timeframes.daily.current}hrs`
    studyCurrent.innerText = `${info[2].timeframes.daily.current}hrs`
    exerciseCurrent.innerText = `${info[3].timeframes.daily.current}hrs`
    socialCurrent.innerText = `${info[4].timeframes.daily.current}hrs`
    selfCareCurrent.innerText = `${info[5].timeframes.daily.current}hrs`
    workPast.innerText = ` Last Week - ${info[0].timeframes.daily.previous}hrs`
    playPast.innerText = ` Last Week - ${info[1].timeframes.daily.previous}hrs`
    studyPast.innerText = ` Last Week - ${info[2].timeframes.daily.previous}hrs`
    exercisePast.innerText = ` Last Week - ${info[3].timeframes.daily.previous}hrs`
    socialPast.innerText = ` Last Week - ${info[4].timeframes.daily.previous}hrs`
    selfCarePast.innerText = ` Last Week - ${info[5].timeframes.daily.previous}hrs`
}
const monthly = () =>{
    workCurrent.innerText = `${info[0].timeframes.monthly.current}hrs`
    playCurrent.innerText = `${info[1].timeframes.monthly.current}hrs`
    studyCurrent.innerText = `${info[2].timeframes.monthly.current}hrs`
    exerciseCurrent.innerText = `${info[3].timeframes.monthly.current}hrs`
    socialCurrent.innerText = `${info[4].timeframes.monthly.current}hrs`
    selfCareCurrent.innerText = `${info[5].timeframes.monthly.current}hrs`
    workPast.innerText = ` Last Week - ${info[0].timeframes.monthly.previous}hrs`
    playPast.innerText = ` Last Week - ${info[1].timeframes.monthly.previous}hrs`
    studyPast.innerText = ` Last Week - ${info[2].timeframes.monthly.previous}hrs`
    exercisePast.innerText = ` Last Week - ${info[3].timeframes.monthly.previous}hrs`
    socialPast.innerText = ` Last Week - ${info[4].timeframes.monthly.previous}hrs`
    selfCarePast.innerText = ` Last Week - ${info[5].timeframes.monthly.previous}hrs`
}
optionPs.forEach(optionP => optionP.addEventListener('click', (e) =>{
    if(e.target.id == "daily"){
        optionPs.forEach(optionPchild => optionPchild.classList.remove('selected'))
        e.target.classList.add('selected')
        daily()
    }else if(e.target.id == 'weekly'){
        optionPs.forEach(optionPchild => optionPchild.classList.remove('selected'))
        e.target.classList.add('selected')
        weekly()
    }else{
        optionPs.forEach(optionPchild => optionPchild.classList.remove('selected'))
        e.target.classList.add('selected')
        monthly()
    }
}))
