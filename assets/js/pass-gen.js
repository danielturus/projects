// Random color

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function randomColorGen(){
    var red = getRandomIntInclusive(0,255);
    var green = getRandomIntInclusive(0, 255);
    var blue = getRandomIntInclusive(0, 255);
    var opacity = 0.1;
    var color = "rgba\("+ red+ ", "+ green+", "+ blue +", " + opacity+ "\)";
    document.body.style.background = color;

    // background-color: rgba(0, 255, 255, 0.7);
}

setInterval(randomColorGen, 5000)

// var plength = document.getElementById("exampleInputPassword1").value * 1;

// Generate password

// function generatePass() {
//     randomColorGen();
//     getNumber();
//     document.getElementById("noFacts").style.display = "block";
//     var allowance = 150;
//     if (plength < 5) {
//         document.getElementById("generatedPass").style.display = "block";
//         document.getElementById("generatedPass").innerHTML = "The number provided is too small, we don't recommend setting up a password that small."
//         return
//     };
//     if (plength < allowance) {
//         var keylistalpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         var keylistmega = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         var keylistint = "0123456789";
//         var keylistspec = "!@#_";
//         var temp = '';
//         var len = plength / 2;
//         var len = len - 1;
//         var lenspec = plength - len - len;

//         for (i = 0; i < len; i++)
//             temp += keylistalpha.charAt(Math.floor(Math.random() * keylistalpha.length));


//         for (i = 0; i < lenspec; i++)
//             temp += keylistspec.charAt(Math.floor(Math.random() * keylistspec.length));

//         for (i = 0; i < len; i++)
//             temp += keylistint.charAt(Math.floor(Math.random() * keylistint.length));

//         temp = temp.split('').sort(function () { return 0.5 - Math.random() }).join('');
//         var result = document.getElementById("generatedPass");
//         result.style.display = 'block';
//         result.style.paddingTop = "auto";
//         result.innerHTML = temp;
//         // randomColorGen();
//         // getNumber();
//         return temp;
//     }
//     else {
//         var result = document.getElementById("generatedPass");
//         result.style.display = 'block';
//         result.innerHTML = "The number provided is too big. The password that will be generated will probably crash your browser. Please generate a password with max length of "+ allowance + " strings. Thank you!"
//     }
// }





// GEnerate random facts about numbers

// Jquery method

// function getNumber(){
//     $.get('http://numbersapi.com/' + document.getElementById("exampleInputPassword1").value * 1, function (data) {
//         $('#numberFacts').text(data);
//     })
// }


// Vanilla JS method

function getNumAPI() {
    var numUrl = "https://numbersapi.com/" + + document.getElementById("exampleInputPassword1").value * 1;
    var request = new XMLHttpRequest();
    request.open('GET', numUrl, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var resp = request.responseText;
            document.getElementById("numberFacts").innerHTML = resp;
        } else {
            // We reached our target server, but it returned an error

        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
    };

    request.send();
}










function passGen() {
    //  1. Check if the provided number is too small (< 5)
    const lowerLimit = 5;
    // randomColorGen();
    getNumAPI();
    document.getElementById("noFacts").style.display = "block";
    const upperLimit = 150;
    var password = "";
    var passLength = document.getElementById("exampleInputPassword1").value * 1;
    if(passLength < lowerLimit) {
        document.getElementById("generatedPass").style.display = "block";
        document.getElementById("generatedPass").innerHTML = "The number provided is too small, we don't recommend setting up a password that small."
        return
    } else if (passLength <= upperLimit) {
        var num = "0123456789";
        var lowerCase = "abcdefghijklmnopqrstuvwxyz";
        var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var symbols = "+-*/()?!@#%&"
        var possible = lowerCase + upperCase + num + symbols;
        for (var i = 0; i < passLength; i++)
            password += possible.charAt(Math.floor(Math.random() * possible.length));
        var result = document.getElementById("generatedPass");
        result.style.display = "block";
        result.innerHTML = password;
    } else {
        result.innerHTML = "The number provided is too big. The password that will be generated will probably crash your browser. Please generate a password with max length of " + upperLimit + " strings. Thank you!"
    }   
}
