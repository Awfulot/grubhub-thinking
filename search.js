const searchField = document.getElementById("search-field");
const locationArray = [
    {location:"Boston", zipcode:"02131"},
    {location:"Florida", zipcode:"85394"},
    {location:"California", zipcode:"95312"},
    {location:"Texas", zipcode:"52902"},
    {location:"New York", zipcode:"29411"},
]

/*
function searchClickHandler(){
    console.log("hello");
}
*/
searchField.addEventListener("click", function(){

    searchPopup();
    letterCheck();
    arrayDataCheck();


})


function searchPopup(){};
function letterCheck(){};
function arrayDataCheck(){};