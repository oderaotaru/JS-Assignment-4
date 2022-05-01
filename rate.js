// var grab = document.getElementById("grab");
 
// var age = parseInt(prompt("Enter your age"))
// var string = prompt("Are you accompanied by an adult?")
// stringToBoolean: function(string){
//     switch(string.toLowerCase().trim()){
//         case "true": 
//         case "yes": 
//         case "1": 
//           return true;

//         case "false": 
//         case "no": 
//         case "0": 
//         case null: 
//           return false;

//         default: 
//           return Boolean(string);
//     }
// }

// In the above, I was trying to incorporate boolean values into the prompt.


var age = 10;
var accompanied = true;
function rated(age, accompanied){
    if(age >= 13 || accompanied) {
      result = `Alright! You're good to see this movie! 👍`;
    }
    else{
      result = `Oops! Sorry, sport. Either get an adult or wait until you're 13.`;
    }
    output = console.log(result)
    return output;
}
rated(age, accompanied);