const searchField = document.getElementById("search-field");
const searchPopup = document.getElementById("search-popup");
//let createdList = false;
let loopCounter = 0;



const locationArray = [
    "Boston",
    "Bakersfield",
    "Baltimore",
    "Buffalo",
    "Auston",
    "Albuquerque",
    "Atlanta",
    "Arlington",
];

/*
function searchClickHandler(){
    console.log("hello");
}
*/

searchField.addEventListener("input", function(){
    

    
    letterCheck();
    


});



function letterCheck(){
    let userInput = searchField.value;
    
    
    
    userInput = userInput.toUpperCase();

    
    for(let item of locationArray){
        //The 4 value below refers to the amount of items that can pop up at a time, with this solution,the amount of items
        //that popup need to be the same for this solution to work. For example this would not work if in the location array
        //there are 4 things that can pop up when the user types one letter, but 3 things that can pop up if the user types a 
        //different letter. There probably is a way to make that 3 value into a variable that changes based on the content
        //that is suppose to pop up. The loop counter variable needed to be there to stop the for loop from repeating content
        //that was already shown when the user types something in the search bar.
        if(item.startsWith(userInput) && loopCounter !== 4){
            searchPopup.classList.remove("hidden");
            //searchPopup.innerHTML = `${item}`;
            console.log("MATCH")
           
            const paragraphListCreate = document.createElement("p");
            paragraphListCreate.innerHTML = `<p>${item}</p>`
            searchPopup.appendChild(paragraphListCreate);
            loopCounter++;
            //createdList = true;

            
            
        }
    }
    
    if(userInput === ""){
        searchPopup.classList.add("hidden");
        searchPopup.innerHTML = "";
        loopCounter = 0;
        //createdList = false;
    }
    
};


