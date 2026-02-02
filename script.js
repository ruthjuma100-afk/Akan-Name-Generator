const submitBtn = document.getElementById("submit")
const day_born = document.getElementById("day_born")
const akan_name = document.getElementById("akan_name")
const males= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
const females= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
const days_of_the_week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
submitBtn.addEventListener("click", ()=> {
    console.log("Submit button clicked")
    retrieveUserInput()
})
function retrieveUserInput(){
    let year = document.getElementById("year").value
    if (year.length !== 4){
        alert("Wrong number of year characters")
    }
    let month = document.getElementById("month").value
    let day = document.getElementById("day").value
    console.log(year,month,day)
    if(!validateDate(day))
    validateMonth(month)

    let gender = validateGender()
    let cc = year.substring(0,2) //take 1st two characters
    let yy = year.substring(year.length - 2) 
    console.log("cc :",cc)
    console.log("yy :",yy)

    let day_of_the_week = calculateDayOfTheWeek(Number(cc),Number(yy),month,day)
    let name =  formulateName(day_of_the_week, gender)
    day_born.textContent = days_of_the_week[day_of_the_week - 1]
    akan_name.textContent = name
    console.log("name of the child is ", name)
}

function validateDate(date){
    if( date > 0 ){
        if( date <= 31){
            alert("Date is correct")
            return false
        }else{
            alert("date can not be greater than 31")
        }        
    }else{
        alert("date can not be less than 1")
    }
}
function validateMonth(month){
    if( month > 0 ){
        if( month <= 12){
            alert("Month is correct")
        }else{
            alert("month can not be greater than 12")
        }        
    }else{
        alert("month can not be less than 1")
    }
}

function validateGender(){
    const checkboxes = document.querySelectorAll('input[name="gender"]');
    let selectedGender;
    checkboxes.forEach(cb => {
        if( cb.checked){
            selectedGender = cb.value
        }
    } )
    if(!selectedGender){
        alert("Gender not selected")
    }
    return selectedGender
}
function calculateDayOfTheWeek(CC,YY,MM,DD){
    // let raw_date = (((CC/   4 - 2 * CC - 1) + ((5 * YY)/4) + ((26 * (MM + 1))/10)) + DD)
    let raw_date =((  CC/4 - 2 * CC - 1) + (45 * YY) + (1026 * (MM + 1))) + DD
    
    let date =  (raw_date) % 7
    console.log("day of the week",date)
    return date
}

    
