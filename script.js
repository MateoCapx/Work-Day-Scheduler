        // Display Date & Time on Page 
const date = new Date();
const displayDate = document.querySelector("#currentDay").innerHTML = date.toUTCString();
let localstorageArr=['inputOne','inputTwo','inputThree','inputFour','inputFive','inputSix','inputSeven','inputEight','inputNine',]

        //targetting the input field for input 1
// let inputOne = document.querySelector("#inputOne.input1");

        //  How we get something from local storage.
// let storedInput = localStorage.getItem("inputValue");
let inputOne = document.getElementById("inputOne");



// Targetting the Save Buttons 

let btnOne = document.querySelector("#btnInput1");
btnOne.addEventListener("click",btnFunc )


 function btnFunc( ) {
        event.preventDefault();
        console.log(inputOne.value)



                    // Validaing inPut
                if(inputOne.value) {
                console.log("WORKKSSKSKS ")
         }
            else {
                window.alert(" Enter Event Before Saving ")
            }
            
               // Properties for local Storage 
                let input = inputOne.value;
                
                localStorage.setItem('inputValue', input)
                // let storedInput = localStorage.getItem(btnFunc);
                

                    for (let i = 0; i < localstorageArr.length; i++) {
                        let storedData = localstorageArr[i];
                        
                    localStorage.getItem(localstorageArr[i])
                }

           
    retriveItemFromLS();
             
   

        // Getting items from Local Storage
    function retriveItemFromLS() {
        if (storedInput ) {
            input.textcontent = storedInput;
        }

        
 }


 
    }
    
    let storedInput = localStorage.getItem('inputValue');
    inputOne.innerHTML=storedInput;
    console.log(inputOne)