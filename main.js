var square = 25;
var characters = '';
var language = 'cz';
var arr = [];
var mode = 'small';
const tester = [];

let list = document.querySelector('.console-input')
let print = ''

// dictionary
let dictionary = 'ABCDEFGHIJKLMNOPRSTUVWXYZ0123456789';

// diacritics character
let diacritics =
{
    "Ě" : "E",    "Š" : "S",    "Č" : "C",     "Ř" : "R",    "Ž" : "Z",   "Ý" : "Y",
    "Á" : "A",    "Í" : "I",    "É" : "E",     "Ó" : "O",    "Ů" : "U",   "Ú" : "U",
    "Ť" : "T",    "Ď" : "D",    "Ň" : "N",
}

function adfgx() {
    square = 25;
    mode = 'small';
    console.log("SET ADFGX MODE WITH SQUARE: " + square);
    // document.getElementById("console-output").innerHTML = "ADFGX (5x5) mode has been set...";
    print += '<li>' + "ADFGX (5x5) mode has been set..." +'</li>'
    list.innerHTML = print
    document.getElementById('adfgvx_table').style.display = 'none';
    document.getElementById('adfgx_table').style.display = 'inline-block';
}

function adfgvx() {
    square = 36;
    mode = 'big';
    console.log("SET ADFGVX MODE WITH SQUARE: " + square);
    // document.getElementById("console-output").innerHTML = "ADFGVX (6x6) mode has been set...";
    print += '<li>' + "ADFGVX (6x6) mode has been set..." +'</li>'
    list.innerHTML = print
    document.getElementById('adfgx_table').style.display = 'none';
    document.getElementById('adfgvx_table').style.visibility = 'none';
    document.getElementById('adfgvx_table').style.display = 'inline-block';

}

function cz() {
    language = 'cz';
    console.log("SET LANGUAGE: " + language);
    // document.getElementById("console-output").innerHTML += "Language has been set to Czech...";
    print += '<li>' + "Language has been set to Czech..." +'</li>'
    list.innerHTML = print
    
    for(i = 0; i < square; i++) {
        var arr = document.getElementsByClassName(mode)[i].value;
            if(arr == "Q" && square == "25") {
                arr = arr.replace("Q", "J");
                document.getElementsByClassName(mode)[i].value = "J";
            }
    }
}
function en() {
    language = 'en';
    console.log("SET LANGUAGE: " + language);
    // document.getElementById("console-output").innerHTML += "Language has been set to English...";
    print += '<li>' + "Language has been set to English..." +'</li>'
    list.innerHTML = print
    

        for(i = 0; i < square; i++) {
            var arr = document.getElementsByClassName(mode)[i].value;
                if(arr == "J" && square == "25") {
                    arr = arr.replace("J", "Q");
                    document.getElementsByClassName(mode)[i].value = "Q";
                }
        }

}

// function get user key and 
function getKey(key) {
    var key = document.getElementById("key").value;

    print += '<li>' + '<b>' + "Key: " + '</b>' + key.toUpperCase() +'</li>'
    list.innerHTML = print
    
        // set key to upper case, replace gaps and replace Q to O
        key = key.toUpperCase().replace(/\s/g, '');
 
        // loop for check allowed characters
        for(var i = 0; i < key.length; i++){
            if(dictionary.includes(key[i]) === true || key[i] in diacritics) {
                 if(key[i] in diacritics) {
                     var change = (key[i], diacritics[key[i]]);
                     key = key.replace(key[i], change);   
                }
             }
             else {
                 key = key.replace(key[i], '');
                //  alert("Enter the allowed characters in the key field!");
                 print += '<li style="color: #ff0000a8;">' + "Enter the allowed characters in the key field!" +'</li>'
                 list.innerHTML = print
                 return;
             }
         }
         return key;
 
 }

// function get input
function getString(input) {
    // return document.getElementById("input").value;
    var input = document.getElementById("input").value;

    input = input.toUpperCase();

    print += '<li>' + '<b>' + "Input: "+ '</b>' + input +'</li>'
    list.innerHTML = print

        if(language === 'cz') {
            input = input.replace(/\s/g, 'XMEZERAX').replace(/Q/g, "O");
        }
        if(language === 'en') {
            input = input.replace(/\s/g, 'XMEZERAX').replace(/J/g, "I");
        }
     
        // loop for check allowed characters
        for(var i = 0; i < input.length; i++){
            if(dictionary.includes(input[i]) === true || input[i] in diacritics) {
                 if(input[i] in diacritics) {
                     var change = (input[i], diacritics[input[i]]);
                     input = input.replace(input[i], change);   
                }
             }
             else {
                input = input.replace(input[i], '');
             }
         }
         return input;
}

function sort(a, b) {
    if(a.key > b.key) {
        return 1;
    } else if(b.key > a.key) {
        return -1;
    } else {
        return 0;
    }
}


function fillSquare() {
    var result = '';

    console.log("GENERATED");
    // document.getElementById("console-output").innerHTML = "Matrix has been generated...";
    print += '<li>' + "Matrix has been generated..." +'</li>'
    list.innerHTML = print

    if (square == 36) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        for(j = 0; j < square; j++) {

            if(arr !== '') {
                arr = [];
            }

            for(j = 0; j < square; j++) {
    
                result = characters.charAt(Math.floor(Math.random() * characters.length));
                arr += result;
                characters = characters.replace(result, '');
                // console.log(result);
            }
        }
    }
    
    if (square == 25) {

        if(language === 'cz') {
            characters = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
            
            if(arr !== '') {
                arr = [];
            }

            for(j = 0; j < square; j++) {
    
                result = characters.charAt(Math.floor(Math.random() * characters.length));
                arr += result;
                characters = characters.replace(result, '');
                // console.log(result);
            }
        }

        if(language === 'en') {
            characters = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
            
            if(arr !== '') {
                arr = [];
            }

            for(j = 0; j < square; j++) {
    
                result = characters.charAt(Math.floor(Math.random() * characters.length));
                arr += result;
                characters = characters.replace(result, '');
                // console.log(result);
            }
        }
    }

    for(i = 0; i < square; i++) {
        document.getElementsByClassName(mode)[i].value = arr[i];
    }


}

function save(matrix) {

    // var array = fillSquare();
    var matrix = [];

    console.log("LANGUAGE: " + language);
    console.log("MODE: " + mode);
    console.log("SQUARE: " + square);

    // for(i = 0; i < square; i++) {
    //     var arr1 = document.getElementsByClassName(mode)[i].value;
    //     matrix += arr1;

    //     for(j = i+1; j < matrix.length-1; j++) {
    //         console.log("Array " + matrix[i]);
    //         console.log("Result " + arr1);
    //         console.log("ALL Array: " + matrix);
        
    //         if(arr1 === matrix[i]) {
    //             alert('Zadejte odlisne znaky!')
    //             return
    //         }
    //     }

    // }

    for(var j = 0; j < square; j++) {
    
        var arr1 = document.getElementsByClassName(mode)[j].value;
        arr1 = arr1.toUpperCase();
        matrix += arr1;

        for(var i = 0; i < matrix.length-1; i++) {
        
            if(language === 'cz' && arr1 === 'Q' && mode === 'small') {
                arr1 = arr1.replace(arr1, 'O');
            }
            if(language === 'en' && arr1 === 'J' && mode === 'small') {
                arr1 = arr1.replace(arr1, 'I');
            }   
            if(arr1 === matrix[i]) {
            //    alert("ZKONTROLUJTE, ZDA JSTE ZADALI VSE PODLE PRAVIDEL!");
               print += '<li style="color: #ff0000a8;">' + "Check if you enter everything according to the rules!" + '</li>'
               list.innerHTML = print
               return;
            }
        } 
    }

    console.log("MATRIX: " + matrix);

    // document.getElementById("console-output").innerHTML = "Matrix saved: " + matrix;
    var modeS;
    var squareS;
    if(mode == "small") {
        modeS = "ADFGX";
        squareS = "5x5";
    } else {
        modeS = "ADFGVX";
        squareS = "6x6";
    }
    print += '<li>' + '<b>' + "Language: "+ '</b>' + language + '</li>'
    print += '<li>' + '<b>' + "Mode: " + '</b>' + modeS + '<b>' + " Square: "+ '</b>' + squareS + '</li>'
    print += '<li>' + matrix + '</li>'
    print += '<li>' + '<b>' + "Matrix saved!" + '</b>' +'</li>'
    list.innerHTML = print

    return matrix;
}

function cl() {
    console.clear();
    // document.getElementById("console-output").innerHTML = "Matrix has been reset...";
    print += '<li>' + "Matrix has been reset..." +'</li>'
    list.innerHTML = print
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function closeBtn() {
    document.getElementById("console").style.display = "none";
    console.log("close");

}

var clicked = true;

function minimalizeBtn() {
    if(clicked == false) {
        document.getElementById("console").style.top = "0";
        clicked = true;
    } else {
        document.getElementById("console").style.top = "var(--size-top)";
        clicked = false;
    }

}

