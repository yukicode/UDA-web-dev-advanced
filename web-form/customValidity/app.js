/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

var patternNum = /[0-9]+/;
var patternLowercase = /[a-z]+/;
var patternUppercase = /[A-Z]+/;
var patternSpecialChar = /[\!\@\#\$\%\^\&\*]+/;
var patternIllegalChar = /[^A-z0-9\!\@\#\$\%\^\&\*]/g;
/*
You'll probably find this function useful...
 */  
submit.onclick = function () {
    var pw = firstPasswordInput.value;
    if(pw !== secondPasswordInput.value){
        firstPasswordInput.setCustomValidity("The passwords are not the same");
    }else if(pw.length <1){
        firstPasswordInput.setCustomValidity("Password is too short!");
    }else if(pw.length>100) {
        firstPasswordInput.setCustomValidity("Password is too long!");
    }else if(pw.search(patternNum)<0){
        firstPasswordInput.setCustomValidity("Password must contain a number!");
    }else if(pw.search(patternLowercase)<0){
        firstPasswordInput.setCustomValidity("Password must contain a lowercase letter!");
    }else if(pw.search(patternUppercase)<0){
        firstPasswordInput.setCustomValidity("Password must contain a UPPERCASE letter!");
    }else if(pw.search(patternSpecialChar)>0){
        firstPasswordInput.setCustomValidity("Password can't contain special chars @, !, #, $, %, ^, &, *");
    }else{
        firstPasswordInput.setCustomValidity("");
    }

};