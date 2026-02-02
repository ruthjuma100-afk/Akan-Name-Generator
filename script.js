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