const searchField = document.getElementById("search-field");
const searchPopup = document.getElementById("search-popup");

const locationArray = [
    {location:"Boston", zipcode:"02131"},
    {location:"Florida", zipcode:"85394"},
    {location:"California", zipcode:"95312"},
    {location:"Texas", zipcode:"52902"},
    {location:"New York", zipcode:"29411"},
]
const location2 = [
    "Boston",
    "Florida",
]

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


})


//function searchPopup(){};
function letterCheck(){
    let userInput = searchField.value;
    //let userLetterArray = [];

    for(let item of location2){
        if(item.startsWith(userInput)){
            searchPopup.classList.remove("hidden");
            searchPopup.innerHTML = `${item}`;
            console.log("MATCH")
        }
    }
    if(userInput === ""){
        searchPopup.classList.add("hidden");
    }
};


/**
 * This function would compare the locationArray with the array created by the array in the letterCheck function
 * if string = string, show item
 */
//function arrayDataCheck(){};