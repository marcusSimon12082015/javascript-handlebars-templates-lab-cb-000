function init() {
  //put any page initialization/handlebars initialization here
  var formTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var result = formTemplate();
  document.getElementById('centeredDiv').innerHTML += result;
  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString("<li>" + this.ingredient + "</li>");
  })
}

function createRecipe()
{
    let ingredients = document.getElementsByName("ingredients");
    var result = document.getElementById("end-process-message").innerHTML += "Recipe created!!!";
    debugger;
    return result;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
