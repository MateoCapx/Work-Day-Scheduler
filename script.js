        // Display Date & Time on Page 
const date = new Date();
const displayDate = document.querySelector("#currentDay").innerHTML = date.toUTCString();


        //  How we get something from local storage.
  let storedInput = localStorage.getItem("9AM");
  let storedInput1 = localStorage.getItem("10AM");
  let storedInput2 = localStorage.getItem("11AM");
  let storedInput3 = localStorage.getItem("12PM");
  let storedInput4 = localStorage.getItem("1PM");
  let storedInput5 = localStorage.getItem("2PM");
  let storedInput6 = localStorage.getItem("3PM");
  let storedInput7 = localStorage.getItem("4PM");
  let storedInput8 = localStorage.getItem("5PM");

  

        //Grabbing the input fields
  let inputOne = document.querySelector("#inputOne");
  let inputTwo = document.querySelector("#inputTwo");
  let inputThree = document.querySelector("#inputThree");
  let inputFour = document.querySelector("#inputFour");
  let inputFive = document.querySelector("#inputFive");
  let inputSix = document.querySelector("#inputSix");
  let inputSeven = document.querySelector("#inputSeven");
  let inputEight = document.querySelector("#inputEight");
  let inputNine = document.querySelector("#inputNine");


//   // Grabbing All the Button input IDs (classes)
  let btnTwo = document.querySelector(".btn2");
  let btnThree = document.querySelector(".btn3");
  let btnFour = document.querySelector(".btn4");
  let btnFive = document.querySelector(".btn5");
  let btnSix = document.querySelector(".btn6");
  let btnSeven = document.querySelector(".btn7");
  let btnEight = document.querySelector(".btn8");
  let btnNine = document.querySelector(".btn9");
 

        // Add Event Listeners to all the buttons
  btnTwo.addEventListener("click",btnFunc )
  btnThree.addEventListener("click",btnFunc )
  btnFour.addEventListener("click",btnFunc )
  btnFive.addEventListener("click",btnFunc )
  btnSix.addEventListener("click",btnFunc )
  btnSeven.addEventListener("click",btnFunc )
  btnEight.addEventListener("click",btnFunc )
  btnNine.addEventListener("click",btnFunc )
  



// Targetting the Save Buttons 
let btnOne = document.querySelector("#btnInput");
btnOne.addEventListener("click",btnFunc )


        // Main function - Data Validating , Setting up Local Storage 
 function btnFunc() {
        event.preventDefault();
        console.log(inputOne.value)
        console.log(inputTwo.value)

                    // Validaing inPut
                if(inputOne.value && inputTwo.value && inputThree.value 
                    && inputFour.value && inputFive.value && inputSix.value 
                    && inputSeven.value && inputEight.value
                     && inputNine.value) {
                console.log("WORKKSSKSKS ")
         }
            else {
                window.alert(" Enter Event Before Saving ")
            }
            
               // Properties for local Storage 
                let input = inputOne.value;
                let input1 = inputTwo.value;
                let input2 = inputThree.value;
                let input3 = inputFour.value;
                let input4 = inputFive.value;
                let input5 = inputSix.value;
                let input6 = inputSeven.value;
                let input7 = inputEight.value;
                let input8 = inputNine.value;
               
                // Placing items into Local Storage
                localStorage.setItem('9AM', input)
                localStorage.setItem('10AM', input1)
                localStorage.setItem('11AM', input2)
                localStorage.setItem('12PM', input3)
                localStorage.setItem('1PM', input4)
                localStorage.setItem('2PM', input5)
                localStorage.setItem('3PM', input6)
                localStorage.setItem('4PM', input7)
                localStorage.setItem('5PM', input8)
               
             
    }
     retriveItemFromLS()
    
    // Getting items from Local Storage
    function retriveItemFromLS() {
        if (storedInput ) {
            inputOne.value = storedInput;
            inputTwo.value = storedInput1;
            inputThree.value = storedInput2;
            inputFour.value = storedInput3;
            inputFive.value = storedInput4;
            inputSix.value = storedInput5;
            inputSeven.value = storedInput6;
            inputEight.value = storedInput7;
            inputNine.value = storedInput8;
           
        }

        
 }



                            // Another way to code this project 

// let localstorageArr=['inputOne','inputTwo','inputThree','inputFour','inputFive','inputSix','inputSeven','inputEight','inputNine',]

                //     for (let i = 0; i < localstorageArr.length; i++) {
                //         let storedData = localstorageArr[i];
                        
                //     localStorage.getItem(localstorageArr[i])
                // }