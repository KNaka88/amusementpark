$(document).ready(function(){

  var height = parseFloat(prompt("How tall are you? (feet)"));

  if (height < 5.0){
    $("#lessFiveFeet").show();
  }else if (height < 7.0){
    $("#fiveFeet").show();
  }else{
    $("#sevenFeet").show();
  }
});
