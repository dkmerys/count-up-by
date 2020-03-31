$(document).ready(function() {
  
  $("button").click(function(event) {
    var countTo = parseInt($("#countto").val());
    var countBy = parseInt($("#countby").val());

    var total = 0;
    for (var currentNumber = 0; currentNumber <= countTo; currentNumber += countBy) {
      total = currentNumber
      alert("Total is: " + total);
    }
    
    event.preventDefault();
  });
});