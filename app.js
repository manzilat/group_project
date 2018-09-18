/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':

    // TODO: search by name
    //if("enter your name", searchByName(people) && displayPeople(people));
    searchByName(people)
    break;
    case 'no':
    searchByTraits(people)
    ;
    break;
    default:
    alert("Wrong! Please try again, following the instructions dummy. :)");
    app(people); // restart app
    break;
  }
}

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation' 'parents' 'currentSpouse'.");
  let filteredPeople;

  switch(userSearchChoice) {
    case "height":
      filteredPeople = searchByHeight(people);
      break;
    case "weight":
      filteredPeople = searchByWeight(people);
      break;
      case "eyecolor":
      filteredPeople = searchByEyeColor(people);
      break;

      case "gender":
      filteredPeople = searchByGender(people);
      break;

    case "age":
      filteredPeople = searchByAge(people);

      break;
      case "occupation":
      filteredPeople = searchByOccupation(people);
      break;

      

    // so on and so forth
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }  

  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);

}
function searchByHeight(people){
  let userInputHeight = prompt("what is the height of the person?");

  let newArray = people.filter(function (el) {
    if(el.height == userInputHeight) {
      return true;
    }
    // return true if el.weight matches userInputHeight
  });

  return newArray;
}
function searchByOccupation(people){
  let userInputOccupation = prompt("what is the occupation of the person?");
  let newArray = people.filter(function (el) {
    if(el.parents== userInputParents) {
      return true;
    }
  else{
    return false;
  }
  });

  return newArray;
}
function searchByGender(people){
  let userInputGender = prompt("what is the gender of that person");
  let userInputHeight = prompt("what is the height of that person");
  let newArray = people.filter(function (el) {
    if(el.gender == userInputGender && (el.height == userInputHeight ) ) {
      return true
    
    }
    else {
      return false;
    }// return true if el.weight matches userInputHeight
  });

  return newArray;
}
  
function searchByHeight(people){
  let userInputHeight = prompt("what is the height of the person?");
  let userInputOccupation = prompt("what is the occupation of that person");
  let newArray = people.filter(function (el) {
    if(el.height == userInputHeight && el.occupation === userInputOccupation) {
      return true;
    }
    // return true if el.weight matches userInputHeight
  });

  return newArray;
}
function searchByAge(people){
  let userInputDob = prompt("what is the dob (date of birth) the person?");
  
  let newArray = people.filter(function (el) {
    if(el.dob === userInputDob )  {
      return true;
    }  
  });

  return newArray;
}


function searchByEyeColor(people){
  let userInputEyeColor = prompt("what is the EyeColor of the person?");
  let userInputDob = prompt("what is the dob (date of birth) the person?");
  let newArray = people.filter(function (el) {
    if(el.eyeColor == userInputEyeColor && el.dob === userInputDob) {
      return true;
    }
  
  });

  return newArray;
}



function searchByOccupation(people){
  let userInputOccupation = prompt("what is the occupation of the person?");



  let newArray = people.filter(function (el) {
    if(el.occupation == userInputOccupation) {
      return true;
    }
    // return true if el.weight matches userInputHeight
  });

  return newArray;
}

function searchByWeight(people) {
  let userInputWeight = prompt("How much does the person weigh?");

  let newArray = people.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;
    }
    // return true if el.weight matches userInputHeight
  });

  return newArray;
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":

   filteredInfo = displayPerson(person);

    // TODO: get person's info


    break;

    case "family":



    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restat
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  
  let foundPerson = people.filter(function (el) {
    if(el.firstName.toLowerCase() == firstName.toLowerCase() && el.lastName.toLowerCase() === lastName.toLowerCase()){
      return true;
    }
  });
  displayPerson(foundPerson[0]);
}
   // TODO: find the person using the name they entered
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName + "\n";
   

  }).join("\n"));
}

function displayPerson(person){
 
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "height: " + person.height + "\n";
  personInfo += "weight: " + person.weight + "\n";
  personInfo += "eyeColor: " + person.eyeColor + "\n";
  personInfo += "parents: " + person.parents + "\n";
  personInfo += "occupation: " + person.occupation + "\n";
  personInfo += "currentSpouse: " + person.currentSpouse + "\n";
 
  alert(personInfo);
}
// function that prompts and validates user input
function promptFor(question, callback){
  do{
    var response = prompt(question).trim();
  } while(!response || !callback(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}