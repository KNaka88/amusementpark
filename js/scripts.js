$(document).ready(function(){

  var userAge =  parseInt(prompt("Please type your age"));

  if(userAge === NaN){
      alert("Please type Number");
  }else if(userAge < 10) {
      $("#kids").show();
  }else if(userAge <18){
      $("#minor").show();
  }else {
      $("#adult").show();
  }
});
