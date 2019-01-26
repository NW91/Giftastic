$(document).ready(function(){

//Starting array of sports
var sportTopics = [tennis, swimming, basketball, soccer, football, hockey]

designatedLocation = " "

//function for showing the sports
function renderButtons() {

//clearing the search button
$("#sports-view").empty();

//for loop of the sports + creating new buttons/classes
for(var i = 0; i < sportTopics.length; i++) {
var a = $('<button>');
a.addClass('sport');

a.attr('data-name', sportTopics[i]);
a.text(sportTopics[i]);
$("sports-view").append(a);

    }
}

})