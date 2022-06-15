function sendToWindow() {
  if (checkFirstName() && checkBday()) {
    return true;
  }
  return false;
}
// function checkFirstName(){
//     // // if(userName.value [0] == userName.value [0].toUooerCase()){
//     //     if(userName.value {,10} ){
//     var regexName  =/^[a-z][a-z0-9]$/
//     var regLength = /^.{1,10}/
//     if(regexName.test(userName.value)  && regexName.test(userLastName.value) && regLength.test(userName.value) && regLength.test(userLastName.value)){
//            alert('yes');
//            return true;
//     }
//        alert('no');
//     return false;

//     }
// userName_label.innerHTML ="<b>The first letter must be a capital letter!</b>"
// userName_label.style.color ="red"
// return false
 var nowyear =new Date().getFullYear()
function checkBday() {
  
     
 var userInput = document.getElementById("birthDay").value.slice(0, 4);
  if (nowyear-userInput < 18) {
   console.log("yes");
    return true;
  }
  alert("no");
  return false;
}
