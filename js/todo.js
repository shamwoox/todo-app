//Check off todo by clicking
//When "li" is clicked inside a "ul," run this code
$("ul").on("click", "li", function() {
  //if li is gray
    //turn in black
  //else turn gray
  $(this).toggleClass("completed");
});

//Click on X to delete
//When a "span" is clicked inside a "ul," run this code
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation(); //Prevents bubbling to parent elements
});

$("input[type=text]").keypress(function(event) {
  //Check for "enter" key
  if(event.which === 13) {
    var todoText = $(this).val()
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$("#collapse").click(function() {
  $("input[type=text]").fadeToggle();
})
