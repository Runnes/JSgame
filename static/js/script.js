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
let date = randomDate('01/01/1970','12/12/2055')
document.getElementById("mainBox").innerHTML = date
dateWithHours = new Date(date + " 01:01:01")
let optionArray = ['a','b','c','d']
let dateArray =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let correctOption = optionArray[Math.floor(Math.random()*optionArray.length)]

correctDay = dateArray[dateWithHours.getDay()]

document.getElementById(correctOption).innerHTML = correctDay


dayIndex = dateArray.indexOf(correctDay)
dateArray.splice(dayIndex,1)
optionIndex = optionArray.indexOf(correctOption)
optionArray.splice(optionIndex,1)

console.log(correctOption,optionArray, correctDay)
optionArray.forEach(element => {
    let dayToRemove = dateArray[Math.floor(Math.random()*dateArray.length)]

    document.getElementById(element).innerHTML = dayToRemove

    console.log(dayToRemove,dateArray,element,correctOption)

    dateArray.splice(dateArray.indexOf(dayToRemove),1)




})

