$(document).ready(function() {

//Initial array of tv shows
    var topics = ["Mad Men", "Community", "Breaking Bad", "The Office", "The Good Place", "Atlanta", "Master of None", "Black Mirror", "Boardwalk Empire", "Veep"]
    designatedLocation = " "
    
    
//Function for displaying tv show data
    function renderButtons() {
    
//Empties the box for new shows
    $("#topics-view").empty();
    
//Forloop through the array of Tv Shows
    for (var i=0; i < topics.length; i++) {
    //Dynamically generates the button for each tvShow in the array
        var a = $('<button>');
    //Adding a class
        a.addClass('tvShow');
    //adding a data-attribute with a value of the television at index i
        a.attr('data-name', topics[i]);
    //providing the button with text using the array
        a.text(topics[i]);
    //adding the button the html
    $("#topics-view").append(a);
    }
    s=
    $("#tvShow-input").focus();
    }
    
renderButtons();
    
    //Event handlers, function handles events where one button is clicked
    $("#add-tvShow").on('click', function() {
    
    //Prevents the form from trying to submit itself/can hit enter as well as clicking
    event.preventDefault();
    
    //This line will grab the text from the input box
    var tvShow = $("#tvShow-input").val().trim();
    
    //this Tv Show from the textbox is then added into the array
    topics.push(tvShow);
    
//Call to render the buttons
renderButtons();
    });
    
//Displays info
$(document).on('click', 'button',  function() {
    // Deleting the topics prior to adding new topics so you don't repeat buttons
    $('#designatedLocation').empty(); 
        var b = $(this).attr('data-name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + b + "&api_key=dc6zaTOxFJmzC&limit=12";  
        //query api url and public key
        console.log(queryURL); 
    
    //AJAX call to get the json string
    $.ajax({
        url: queryURL,
        method: 'GET'
            })
    //Logs data from the API into the response
        .done(function(response) {
        console.log(response);
    //Stores an array of results into a designated results variable
        var results = response.data;
    //Create Forloop for the results
        for (var i = 0; i < results.length; i++) {
        //Creates a div with a class item
            var gifDiv = $('<div class="item">');
        //Stores the result item's rating        
            var rating = results[i].rating;
        //Creates an element to have the rating displayed
            var r = $('<p>').text("Rating: " + rating);
        //Create imagetag
            var gifImage = $('<img>');
        //Makes the imagetag an src attribute of a property in the result item
        gifImage.attr('src', results[i].images.fixed_height_still.url)
                .attr('data-still', results[i].images.fixed_height_still.url)
                .attr('data-animate', results[i].images.fixed_height.url)
                .attr('data-motion', "still")
                .addClass("showImage");
        //Displays the gif and rating
        gifDiv.append(r)
            .append(gifImage);	                    
    
        //Prepending info to div            	  
        $('#designatedLocation').prepend(gifDiv);
            }
    
        });
});
    
    
// Event listener for clicking, the dynamic proponent
$(document).on('click', '.showImage',  function() {
    
    var motion = $(this).data('motion');
    //If the clicked gifs motion is still, update the src attribute to what its data animate value will be
    if (motion == "still") {
        console.log("still picture working");
    // Promise this; set the gifs data-motion to move
        $(this).attr('src', $(this).data('animate'))
            .data('motion', 'animate');
    } else {
    //  else set src to the data-still value
        console.log("moving picture works");
        $(this).attr('src', $(this).data('still'))
            .data('motion', 'still');               
        }
    
    });
    
});