$(document).ready(function() {
  $("button#cat-btn").click(function() {
    $("ul#user").append("<li>Cats are furry!</li>");
    $("ul#computer").append("<li>But they have sharp claws too!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#computer").children("li").first().click(function() {
      $(this).remove();
    });
    
  });

  $("button#dog-btn").click(function() {
    $("ul#user").append("<li>Dogs are furry, too!");
    $("ul#computer").append("<li>Their claws are less sharp...</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#computer").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("button#after-btn").click(function() {
    $("ul#computer").after("<h2 id='argument'>Third Argument</h2>");
    $("h2#argument").after("<img src='img/fluffy-dog.webp' alt='very cute dog' width='400px'>");
    $("ul#computer").siblings("img").click(function() {
      $(this).remove();
    });
    $("ul#computer").siblings("h2#argument").click(function() {
        $(this).remove();
    });
  });
});
