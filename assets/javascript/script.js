$(document).ready(function(){

//Starting array of sports
var sportTopics = [tennis, swimming, basketball, soccer, football, hockey]

designatedLocation = " "

//Function for showing the sports
function renderButtons() {

//Clearing the search button
$("#sports-view").empty();

//Forloop of the sports + creating new buttons/classes
for(var i = 0; i < sportTopics.length; i++) {
var a = $('<button>');
a.addClass('sport');

a.attr('data-name', sportTopics[i]);
a.text(sportTopics[i]);
$("sports-view").append(a);
    }
s= $("sports-input").focus();
    }

renderButtons();

//Event listeners for Buttons
$("#add-sport").on('click', function() {

//Event listener that lets the user hit enter functionality
event.preventDefault();
    
//Takes the text from the input box
var differentSport = $("sport-input").val().trim();
    
//Sport input from the textbox added to the array
topics.push(differentSport);
    
//Calls the button which handles the processing of our topics sports array
renderButtons();
    });

})