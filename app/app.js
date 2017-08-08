//window.alert("hey")

function getIt(id){
  return document.getElementById(id);
}

// get details here
var email         = document.getElementById('email');
var password      = getIt('password');
var phoneNumber   = getIt('phoneNumber');
var firstName     = getIt('firstName');
var lastName      = getIt('lastName');
var submit        = getIt('btn-submit');

var signUpDetails     = [email, password, '', phoneNumber, firstName, lastName, '']
//var signUpDetailsTwo  = ['example@mail.com3', 'password', '', '+233540420529', 'firstname3', 'lastname3', '']

//console.log(email);

submit.addEventListener('click', function(e){
  e.preventDefault;

/*
  SDK.call('devless', 'signUp', signUpDetails, function(resp){
    SDK.setToken(resp.payload.result.token);
    console.log(resp.payload.result)
    // redirect
    */
  //});
});
// 
// var data = {"users_id":4, "answers" : "1,2,5,6,8,9,4,6,2"}
//
// SDK.addData("quiz", "user_answerss", data,  function(response){
//     console.log(response)
// })

var params = {related: "*"}

SDK.queryData("quiz", "user_answerss", params, function(response){
  console.log(response)
});
