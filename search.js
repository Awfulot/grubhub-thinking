const searchField = document.getElementById("search-field");
const searchPopup = document.getElementById("search-popup");
//let createdList = false;


const locationArray = [
    {location:"Boston", zipcode:"02131"},
    {location:"Florida", zipcode:"85394"},
    {location:"California", zipcode:"95312"},
    {location:"Texas", zipcode:"52902"},
    {location:"New York", zipcode:"29411"},
];
const location2 = [
    "Boston",
    "Florida",
    "Bart",
    "Bolly",
    "Fleak",
    "Fresh"
];

/*
function searchClickHandler(){
    console.log("hello");
}
*/
//bind to input event instead of click event
searchField.addEventListener("input", function(){

    //searchPopup();
    letterCheck();
    //arrayDataCheck();


});


//function searchPopup(){};
function letterCheck(){
    let userInput = searchField.value;
    
    //let userLetterArray = [];
    userInput = userInput.toUpperCase();


    for(let item of location2){
        if(item.startsWith(userInput)/* && (!createdList)*/){
            searchPopup.classList.remove("hidden");
            //searchPopup.innerHTML = `${item}`;
            console.log("MATCH")
           
            const paragraphListCreate = document.createElement("p");
            paragraphListCreate.innerHTML = `<p>${item}</p>`
            searchPopup.appendChild(paragraphListCreate);
            //createdList = true;
            
        }
    }
    if(userInput === ""){
        searchPopup.classList.add("hidden");
        searchPopup.innerHTML = "";
        //createdList = false;
    }
};


/**
 * This function would compare the locationArray with the array created by the array in the letterCheck function
 * if string = string, show item
 */
//function arrayDataCheck(){};