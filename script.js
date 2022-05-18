        // Display Date & Time on Page 
const date = new Date();
const displayDate = document.querySelector("#currentDay").innerHTML = date.toUTCString();
// let localstorageArr=[]
        //targetting the input field for input 1
let btnOneInput = document.querySelector("#inputOne.input1");


// let storedInput = localStorage.getItem(); // How we get something from local storage.




// Targetting the Save Buttons 
let btnOne = document.querySelector("#btnInput1");
btnOne.addEventListener("click",btnFunc )


 function btnFunc( ) {
        event.preventDefault();
        console.log(btnOneInput.value)


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
                let storedInput = localStorage.getItem(btnFunc);

            for(let i=0; i < localStorage.length; i++){
                const key = localStorage.key(i)
                const value =localStorage.getItem(key);
                    } 
    retriveItemFromLS();
             
    }

        // Getting items from Local Storage

    function retriveItemFromLS() {
        if (storedInput ) {
            window.alert('0');
        }

        
    //     // else {

    //     //      (   )
    //     // }
       
 
    // }


    }
