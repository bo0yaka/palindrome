document.addEventListener("DOMContentLoaded", startFunction);


function startFunction(){

    var useButton = document.getElementById("useButton");
    useButton.addEventListener("click", function() {
         var userInput = document.getElementById("getValue").value;
         var isPalindrome = checkIfPalindrome(userInput);
         if (isPalindrome)
            console.log(true);
         else
            console.log(false);
    })

}


function checkIfPalindrome(palindrome) {
    
    printOnlyLetters(palindrome);
    
    if (printOnlyLetters(palindrome).toLowerCase() === reverseString(printOnlyLetters (palindrome)).toLowerCase())
        return true;
        
    else
    
        return false;

}

function reverseString (string) {
    
    var reversedString = "";
    var stringLength = string.length;
    
    for (i=stringLength-1; i>=0; i--){
    
        reversedString += string.charAt(i);
        
    }
    
    return reversedString;
    
}

function printOnlyLetters (string) {
    
    return string.replace(/[^A-Za-z]/g, "");
    
}