
var counter = 0
var round = 1
var optionArray = ['a','b','c','d']
var correctOption
var time_now
var dateArray
var date
var dateWithHours
var correctDay

document.addEventListener('DOMContentLoaded',(event)=>{
document.getElementById('a').addEventListener("click",checkCorrectness)
document.getElementById('b').addEventListener("click",checkCorrectness)
document.getElementById('c').addEventListener("click",checkCorrectness)
document.getElementById('d').addEventListener("click",checkCorrectness)

populateFields()

})



function randomDate(date1, date2){
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-1970'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if( date1>date2){
        return new Date(randomValueBetween(date2,date1)).toLocaleDateString()
    } else{
        return new Date(randomValueBetween(date1, date2)).toLocaleDateString()

    }
}

function populateFields(){

document.querySelectorAll("button").forEach(element=>element.style.backgroundColor = 'white')
optionArray = ['a','b','c','d']
correctOption = optionArray[Math.floor(Math.random()*optionArray.length)]


dateArray =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
date = randomDate('01/01/1970','12/12/2055')
dateWithHours = new Date(date + " 01:01:01")
correctDay = dateArray[dateWithHours.getDay()]

document.getElementById("mainBox").innerHTML = date





document.getElementById(correctOption).innerHTML = correctDay


dayIndex = dateArray.indexOf(correctDay)
dateArray.splice(dayIndex,1)
optionIndex = optionArray.indexOf(correctOption)
optionArray.splice(optionIndex,1)

//console.log(correctOption,optionArray, correctDay)
optionArray.forEach(element => {
    let dayToRemove = dateArray[Math.floor(Math.random()*dateArray.length)]

    document.getElementById(element).innerHTML = dayToRemove

    //console.log(dayToRemove,dateArray,element,correctOption)

    dateArray.splice(dateArray.indexOf(dayToRemove),1)



time_now =performance.now()
})
}





function checkCorrectness(){

    if (this.id==correctOption){
         this.style.backgroundColor = 'green'

         round++
         counter = counter +((performance.now()-time_now)/1000)

         if (round > 5){
         alert("Total time elapsed : " + counter + " seconds")
         return
         }
         document.getElementById('counter').innerHTML="Total time elapsed: " +counter
         document.getElementById('round').innerHTML="Round number: " +round
         populateFields()

//        }
}
    else
        this.style.backgroundColor = 'red'
        console.log(this,correctOption)




}

