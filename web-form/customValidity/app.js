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
    var firstPW = firstPasswordInput.value;
    var secondPW = secondPasswordInput.value;
    var firstPWTracker = new IssueTracker();
    var secondPWTracker = new IssueTracker();

    checkValidity(firstPW, secondPW, firstPWTracker, secondPWTracker);
    firstPasswordInput.setCustomValidity(firstPWTracker.getIssues());
    secondPasswordInput.setCustomValidity(secondPWTracker.getIssues());
};

function checkValidity(firstPW, secondPW, firstPWTracker, secondPWTracker){
    if(firstPW !== secondPW){
        secondPWTracker.add(Issue.NOT_EQUAL);
        return;
    }

    if(firstPW.length < 16){
        firstPWTracker.add(Issue.PW_SHORT);
    }

    if(firstPW.length > 100){
        firstPWTracker.add(Issue.PW_LONG);
    }

    if(firstPW.search(patternNum) < 0){
        firstPWTracker.add(Issue.NEED_NUM);
    }

    if(firstPW.search(patternUppercase) < 0){
        firstPWTracker.add(Issue.NEED_UPPERCASE);
    }

    if(firstPW.search(patternLowercase) < 0){
        firstPWTracker.add(Issue.NEED_LOWERCASE);
    }

    if(firstPW.search(patternSpecialChar) < 0){
        firstPWTracker.add(Issue.NEED_SPECIAL);
    }
    
    var illegalChars = firstPW.match(patternIllegalChar);
    if(illegalChars){
        var allUniqueChars = new HashSet();
        illegalChars.forEach(function(c){
            allUniqueChars.add(c);
        });
        for(var property in allUniqueChars.getAll()){
            if(allUniqueChars.contains(property)){
                firstPWTracker.add(Issue.ILLEGAL_CHAR(property));
            }
        }
    }
}

var Issue = {
    PW_SHORT: "The password should have at least 16 charactors.",
    PW_LONG: "The password should have less than 100 charactors",
    NOT_EQUAL: "The second password is different from the first one",
    NEED_NUM : "Need at least a number.",
    NEED_LOWERCASE: "Need at least a lowercase letter",
    NEED_UPPERCASE: "Need at least a uppercase letter",
    NEED_SPECIAL: "Need at least a special charactor: !, @, #, $, %, ^, &, *.",
    ILLEGAL_CHAR: function(c){
        return "Remove illegal charactor: " + c;
    }
};

function IssueTracker(){
    this.issues = [];
}

IssueTracker.prototype.add = function(s){
    if(s){
        this.issues.push(s);
    }
};

IssueTracker.prototype.getIssues = function(){
    if(this.issues.length === 0){
        return "";
    }
    if(this.issues.length === 1){
        return "Please fix the following problem: " + this.issues[0];
    }
    if(this.issues.length >1){
        var problems = "";
        this.issues.forEach(function(issue){
            problems += issue;
            problems += "\n";
        });
        return "Please fix the following problems: " + problems;
    }
};

function HashSet(){
    this.set = {};
}

HashSet.prototype.add = function(key){
    this.set[key] = true;
};

HashSet.prototype.contains = function(key){
    if(this.set.hasOwnProperty(key)){
        return true;
    }
};

HashSet.prototype.getAll = function(){
    return this.set;
};