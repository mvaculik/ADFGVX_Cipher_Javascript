// kol
// ADX FX AAF 

// kolotoc
// DA AXF DA AGX FA XG FX 

function decrypt() {

    var matrix = save();
    var input = getString();
    var key = getKey();

    var dict = [];
    var arr = [];

    console.log("KEY: " + key);
    // console.log("INPUT: " + input);

    if(matrix == '' || input == '' || key == '') {
        // alert("CHECK EMPTY FILEDS!");
        print += '<li>' + "Check empty fields!" +'</li>'
        list.innerHTML = print
        console.clear();
        return;
    }

    if(input.length < key.length) {
        // alert("Zadej delší vstupní text");
        print += '<li>' + "Enter longer input text!" +'</li>'
        list.innerHTML = print
        console.clear();
        return;
    }

    for(i = 0; i < input.length; i++) {
        if (input.includes("XMEZERAX") == true) {
            input = input.replace("XMEZERAX", " ");
        }
    }

    

    console.log("INPUT: " + input);

    for(i = 0; i < key.length; i++) {
        dict.push({key: key[i], value: i, elements: []});
    }
    
    dict.sort(sort);

    var counter = 0;
    for(var i = 0; i < key.length; i++) {
        // console.log("KEY: " + key[i]);
        // dict.push({key: key[i], value: i, elements: []});

        for(j = counter; j < input.length; j++) {
            // console.log("INPUT: " + input[j]);
            
            if (input[j] == " ") {
                // console.log("BREAK: " + input[j]);
                counter = j+1;
                break;
            }
            dict[i].elements += input[j];
            counter = j;
            // console.log("Counter: " + counter);
        }
    }
    
    print += '<li>' + "." +'</li>'
    print += '<li>' + "." +'</li>'
    print += '<li>' + "----Transposition matrix----" +'</li>'
    for(data of dict) {
        print += '<li>' + "Key: " + data.key + " Index: " + data.value + " Element: " + data.elements +'</li>'
      }

      list.innerHTML = print

    for(i = 0; i < dict.length; i++) {
        // console.log("i " + i);
        for(j = 0; j < dict.length; j++) {
            if(dict[j].value == i) {
                arr.push(dict[j]);
            }
        }
    }
    // console.log(arr);

    var arr1 = new Array(arr.length);
    var pomocna = [];
    var test = [];

    var long = 0;
    var short = 0;

    for(i = 0; i < arr.length; i++) {
        // arr1[i] = arr[i].elements;
        // Array(arr.length).fill(arr1[i]);
        arr1 = Array(1).fill(arr[i].elements);
        // console.log(arr1);
        pomocna += arr1;

        short = pomocna.length;
            if(short > long) {
                long = short;
            }
        // console.log(pomocna);
        for(j = 0; j < pomocna.length; j++) {
            // console.log(pomocna[j] + " - " + j);
            test.push({index: pomocna[j], position: j})
        }
        pomocna = [];
    }

    var test2 = [];
    var len = long;

    // console.log(test.length);

    for(i = 0; i < len; i++) {

        console.log("Row: " + test[i].position);

        for(j = 0; j < test.length; j++) {

            if(test[i].position == test[j].position) {
                
                test2 += test[j].index;
                console.groupCollapsed(test[j].index);
                console.log(test[j]);
                console.groupEnd();
            }
        }
    }

    var p = 0;
    var co1 = "";
    var co2 = "";

    var x, y;
    var arr2 = [];


    // coordinate search
    print += '<li>' + "." +'</li>'
    print += '<li>' + "." +'</li>'
    print += '<li>' + "----Value search----" + '</li>'
    list.innerHTML = print

    // console.log(test2.length);
    for(i = 0; i < test2.length/2; i++) {

        for(j = p; j < p+2; j++) {

            // console.log("value: " + test2[j]);

            if(j % 2 == 0) {
                // console.log("x: " + test2[j]);
                co1 = test2[j];
            } else {
                // console.log("y: " + test2[j]);
                co2 = test2[j];
            }



            
        }
        p = p+2;

        for(k = 0; k < square; k++) {

            x = document.getElementsByClassName(mode)[k].getAttribute("data-row");
            y = document.getElementsByClassName(mode)[k].getAttribute("data-col");


            // console.log("X " + x);
            // console.log(dict);
            
            if(co1 == x && co2 == y) {

                arr2 += matrix[k];


                console.log("Row: " + co1);
                console.log("Column: " + co2);

                console.log("VALUE " + matrix[k]);
                console.log("--------------------");

                print += '<li>' + "Row: " + co1 + '</li>'
                print += '<li>' + "Column: " + co2 + '</li>'
                print += '<li>' + '<b>' + "Result: " + matrix[k] + '</b>' + '</li>'
                print += '<li>' + "--------------------" + '</li>'
                list.innerHTML = print
                break;
            }
        }
    }

    for(i = 0; i < arr2.length; i++) {
        if (arr2.includes("XMEZERAX") == true) {
            arr2 = arr2.replace("XMEZERAX", " ");
        }
    }

    console.log("Decrypted text: " + arr2);
    document.getElementById("output").innerHTML = arr2;

    print += '<li>' + '<b>' + "Decrypted text: "+ '</b>' + arr2 + '</li>'
    list.innerHTML = print


}