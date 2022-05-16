// Display Date & Time on Page 
const date = new Date();
const displayDate = document.querySelector("#currentDay").innerHTML = date.toUTCString();
// let task = ;



// Targetting the Save Buttons 
let btnOne = document.querySelector("#btnInput1");
btnOne.addEventListener("click",btnFunc )

function btnFunc() {
    event.preventDefault();
    console.log(btnOneInput.value)

    if (btnOneInput.value == " "){
               window.alert(" Enter Event Before Saving ")
           }
           else if(btnOneInput.value) {
            console.log("WORKKSSKSKS ")
           }

           btnOneInput.value = localStorage.setItem()
}



//targetting the input field for input 1
let btnOneInput =document.querySelector("#inputOne.input1");
// btnOneInput.addEventListener("click", checkInput) 


     // Validaing inPut
//  function checkInput() {
//    if (btnOneInput.value == "Hello"){
//        console.log("WORKKSSKSKS ")
//    }
//    else{
//        console.log(" Wrongggg ")
//    }
//  }