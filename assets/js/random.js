
setTimeout(function() {
    var theLetters = "DSCHXБГДЗИКЛЧЪЯ:::ABEHILNPTY"; //You can customize what letters it will cycle through
    var ctnt = "Haugerud"; // Your text goes here
    var speed = 100; // ms per frame
    var increment = 4; // frames per step. Must be >2

        
    var clen = ctnt.length;       
    var si = 0;
    var stri = 0;
    var block = "";
    var fixed = "";
    //Call self x times, whole function wrapped in setTimeout
    (function rustle (i) {          
    setTimeout(function () {
    if (--i){rustle(i);}
    nextFrame(i);
    si = si + 1;        
    }, speed);
    })(clen*increment+1); 
    function nextFrame(pos){
    for (var i=0; i<clen-stri; i++) {
        //Random number
        var num = Math.floor(theLetters.length * Math.random());
        //Get random letter
        var letter = theLetters.charAt(num);
        block = block + letter;
    }
    if (si == (increment-1)){
        stri++;
    }
    if (si == increment){
    // Add a letter; 
    // every speed*10 ms
    fixed = fixed +  ctnt.charAt(stri - 1);
    si = 0;
    }
    document.getElementById("random1").innerHTML = "<span class=\"searching1\">" + fixed + "</span><span class=\"searching2\">" + block + "</span>";
    block = "";
    }
    }, 4500);

setTimeout(function() {
    var theLetters = "abcdefghijklmnopqrstuvwxyzæøå1234567890:."; //You can customize what letters it will cycle through
    var ctnt = "Sjakkforrening"; // Your text goes here
    var speed = 15; // ms per frame
    var increment = 2; // frames per step. Must be >2

        
    var clen = ctnt.length;       
    var si = 0;
    var stri = 0;
    var block = "";
    var fixed = "";
    //Call self x times, whole function wrapped in setTimeout
    (function rustle (i) {          
    setTimeout(function () {
    if (--i){rustle(i);}
    nextFrame(i);
    si = si + 1;        
    }, speed);
    })(clen*increment+1); 
    function nextFrame(pos){
    for (var i=0; i<clen-stri; i++) {
        //Random number
        var num = Math.floor(theLetters.length * Math.random());
        //Get random letter
        var letter = theLetters.charAt(num);
        block = block + letter;
    }
    if (si == (increment-1)){
        stri++;
    }
    if (si == increment){
    // Add a letter; 
    // every speed*10 ms
    fixed = fixed +  ctnt.charAt(stri - 1);
    si = 0;
    }
    document.getElementById("random2").innerHTML = "<span class=\"searching1\">" + fixed + "</span><span class=\"searching2\">" + block + "</span>";
    block = "";
    }
    }, 8000);
