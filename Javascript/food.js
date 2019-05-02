$(document).ready(function () {

    $('.btn').on('click', function (event) {
  
        $("#food-row").empty();
  
    var userInput = $('#search-map').val().trim();
     var userInput2 = userInput.split(' ');
     var userInput3 = userInput2[0];
        console.log(userInput)
        
  
        // API key and ID
        var YOUR_APP_ID = '13d7fa80';
        var YOUR_APP_KEY = '184c76885e08b40ef3ce55652516e374';
        // ES6 Template string
        var queryURL = `https://api.edamam.com/search?q=${userInput3}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
  
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
  
            for (var i = 0; i < 2; i++) {
    
               console.log(response.hits[i])
            
                var hits = response.hits[i].recipe;
                createRecipeRow(hits.label, hits.image, hits.ingredientLines, hits.url)
  
            }
  
        });
    });
    
  
  
    //how to set dynamic image source jquery
  
    createRecipeRow = (name, image, ingredients, url ) => {
  
        console.log(name, image, ingredients, url);
        var recipeDiv = $('<div>');
        var recipeImage = $('<img>');
        var a = $('<a>');
        
        var p = $('<p>');
        $(p).append(a);
  
        $(a).attr('id', 'link');
        $(recipeDiv).attr('id', 'titleDivFood');
  
        $(recipeImage).attr('src', image);
        $(a).text('Press here for instructions');
        $(a).attr("href", url);
        $(a).attr('target', '_blank');
  
  
        $(recipeDiv).append(name);
        $(recipeDiv).append(p);
  
        
        $(recipeDiv).append(recipeImage);
  
  
        $("#food-row").append(recipeDiv);
  
        for (var i = 0; i < ingredients.length; i++) {
  
            var ingredientLinesdiv = $('<div>');
  
            $(ingredientLinesdiv).attr('id', 'instructions');
  
            $(ingredientLinesdiv).append(ingredients[i]);
  
            $(recipeDiv).append(ingredientLinesdiv);
  
  
        }
        var foodLine = $('<div>');
        $(recipeDiv).append(foodLine);
        $(foodLine).attr('id', 'foodDottedLine');
    }
  
  });
  