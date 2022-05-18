// Display Date & Time on Page 
const date = new Date();
const displayDate = document.querySelector("#currentDay").innerHTML = date.toUTCString();
// let localstorageArr=[]
let storedInput = localStorage.getItem(); // How we get somthing from local storage.
//targetting the input field for input 1
let btnOneInput = document.querySelector("#inputOne.input1");






// Targetting the Save Buttons 
let btnOne = document.querySelector("#btnInput1");
btnOne.addEventListener("click",btnFunc )


 function btnFunc( ) {
        event.preventDefault();
        console.log(btnOneInput.value)

        // let data =  JSON.parse(localStorage.getItem(inputValue))

                    // Validaing inPut
                if(btnOneInput.value) {
                console.log("WORKKSSKSKS ")

    }
            else {
                window.alert(" Enter Event Before Saving ")
            }
                // Setting up the local Storage Settings 
                let input = btnOneInput.value;
            localStorage.setItem('inputValue', input)
    
            for(let i=0; i < localStorage.length; i++){
                const key = localStorage.key(i)
                const value =localStorage.getItem(key);
                    } 
    getItem();
                    
    }

        // Getting items from Local Storage

    function getItem() {
        if (inputOne.input1.value === "") {
            window.alert('0');
        }

        // else {

        //      (   )
        // }
       
    }



// localStorage.getItem('InputValue', input)
 
        // let input = btnOneInput.value;
        //  localStorage.setItem('InputValue', input)

        // for(let i=0; i < localStorage.length; i++){
        //     const key = localStorage.key(i)
        //     const value =localStorage.getItem(key);
        // } 