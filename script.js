        // Display Date & Time on Page 
const date = new Date();
const displayDate = document.querySelector("#currentDay").innerHTML = date.toUTCString();
let localstorageArr=['inputOne','inputTo','inputThree','inputFour','inputFive','inputSix','inputSeven','inputEight','inputNine',]

        //targetting the input field for input 1
let btnOneInput = document.querySelector("#inputOne.input1");

        //  How we get something from local storage.
// let storedInput = localStorage.getItem("inputValue");





// Targetting the Save Buttons 
let btnOne = document.querySelector("#btnInput1");
btnOne.addEventListener("click",btnFunc )


 function btnFunc( ) {
        event.preventDefault();
        console.log(btnOneInput.value)

    for (let i = 0; i < localstorageArr.length; i++) {
                        let storedData = localstorageArr[i];
                        

                    // Validaing inPut
                if(btnOneInput.value) {
                console.log("WORKKSSKSKS ")
         }
            else {
                window.alert(" Enter Event Before Saving ")
            }
            
               // Properties for local Storage 
                let input = btnOneInput.value;
                
                localStorage.setItem('inputValue', input)
                // let storedInput = localStorage.getItem(btnFunc);
                let storedInput = localStorage.getItem('inputValue');

                
                    storedData.localStorage.getItem(localstorageArr[i])
                }

           
    retriveItemFromLS();
             
   

        // Getting items from Local Storage
    function retriveItemFromLS() {
        if (storedInput ) {
            input.textcontent = storedInput;
        }

        
 }
        
    //     // else {

    //     //      (   )
    //     // }
       
 
    // }


    }
