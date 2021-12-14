
function encrypt() {
    
    var matrix = save();
    var input = getString();
    var key = getKey();


    var dict = [];
    var sub = [];

    var cipherText = [];

    // console.log("KEY: " + key);
    // console.log("INPUT: " + input);


    if(matrix == '' || input == '' || key == '') {
        // alert("CHECK EMPTY FILEDS!");
        print += '<li style="color: #ff0000a8;">' + "Check empty fields!" +'</li>'
        list.innerHTML = print
        console.clear();
        return;
    }

    if(input.length < key.length) {
        // alert("Zadej delší vstupní text");
        print += '<li style="color: #ff0000a8;">' + "Enter longer input text!" +'</li>'
        list.innerHTML = print
        console.clear();
        return;
    }

    print += '<li>' + "." +'</li>'
    print += '<li>' + "." +'</li>'
    print += '<li>' + '<b>' + "----Coordinates of values----" + '</b>' + '</li>'

    // looking for X and Y coordinates
    for(i = 0; i < input.length; i++) {
        for(j = 0; j < square; j++) {
            // console.log("Input: " + input[i]);
            // console.log("Matrix: " + matrix[j]);
            if(input[i] === matrix[j]) {
                var x = document.getElementsByClassName(mode)[j].getAttribute("data-row");
                var y = document.getElementsByClassName(mode)[j].getAttribute("data-col");
                sub.push(x);
                sub.push(y);
                console.groupCollapsed("Input: " + matrix[j])
                console.log("ROW: " + x);
                console.log("COL: " + y);
                console.groupEnd();

                print += '<li>' + '<b>' + "[" + matrix[j] + "] " + '</b>' + " Row: " + x + " Column: " + y +'</li>'
                list.innerHTML = print
        }
        }

    }

    // create new dictionary
    for(i = 0; i < key.length; i++) {
        dict.push({key: key[i], value: i, elements: [], check: 0});

    }

    for(i = 0; i < sub.length; i++) {

        for(j = 0; j < key.length; j++) {
            if(sub[i] == null) {
                break;
                // dict[j].elements += "-";
            } else {
                // console.log("Key: " + key[j]);
                // console.log("---Sub: " + sub[i] + " I is " + i);
                dict[j].elements += sub[i];
            }
            ++i;
        }
        --i;
    }

    dict.sort(sort);

    for(i = 0; i < dict.length; i++) {

        cipherText += dict[i].elements;
        cipherText += " ";
    }

    print += '<li>' + "." +'</li>'
    print += '<li>' + "." +'</li>'
    print += '<li>' + '<b>' + "----Transposition matrix----" + '</b>' + '</li>'
    for(data of dict) {
        print += '<li>' + "Key: " + data.key + " Index: " + data.value + " Element: " + data.elements +'</li>'
      }

      list.innerHTML = print

    // document.getElementById("console-output").innerHTML = myArray;
    // document.getElementById("console-output").innerHTML = dict.key + ", " + dict.value + ", " + dict.elements;
    console.log(dict);


    // const reverseCipherText = cipherText.split('').reverse().join('');

    console.log("Cipher: " + cipherText);
    document.getElementById("output").innerHTML = cipherText;

    print += '<li>' + '<b>' + "Encrypted text: " + '</b>' + cipherText +'</li>'
    list.innerHTML = print

}