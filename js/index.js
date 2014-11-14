function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    /* how to make objects change instead? */
    
    var temp = ev.target.src;
    ev.target.src = document.getElementById(data).src;
    document.getElementById(data).src = temp;
    
    document.getElementById("test").innerHTML = "";
    
    // swap (ev.target.src, document.getElementById(data).src);
  
  
    /* SHIFT OTHER ELEMENTS */
    var shift_indexes = [];
    var counter = 0;
    for ( var i = 1; i <= 10; i++ ) {
      var source = document.getElementById("drag"+i).src;
      
      /* skip the dragged and dropped-on objects */
      if ( source == ev.target.src || source == document.getElementById(data).src ) {
        continue; 
      }
      shift_indexes[counter] = i;
      counter++;   
    }
  
 
      // document.getElementById("test").innerHTML += "<br>" + shift_indexes[i];
    var one = 0, two = 0;
    var end = shift_indexes.length-1;
    for ( var i = end; i >= 0; i-- ) {
      
      if ( one == 0 ) {
        one = document.getElementById("drag"+shift_indexes[i]).src;
      }
      else if ( one != 0 && two == 0 ) {
        two = document.getElementById("drag"+shift_indexes[i]).src;
      }
      
      if ( i == 0 ) {
        document.getElementById("drag"+shift_indexes[i]).src = one;
      }
      else {
        var ind = shift_indexes[i-2];
        document.getElementById("drag"+shift_indexes[i]).src = document.getElementById("drag"+shift_indexes[i-1]).src;
      }
      
      
      
      /*
      if ( i == 1 ) {
        document.getElementById("drag"+shift_indexes[i]).src = one;
      }
      else if ( i == 0 ) {
        document.getElementById("drag"+shift_indexes[i]).src = two;
      }
      else {
        var ind = shift_indexes[i-2];
        document.getElementById("drag"+shift_indexes[i]).src = document.getElementById("drag"+shift_indexes[i-2]).src;
      }
      */
    }  
  
    /*
    var one = 0, two = 0;
    var count = 0;
    for ( var i = 10; i >= 1; i-- ) {
      var source = document.getElementById("drag"+i).src;
      
      // skip the dragged and dropped-on objects 
      if ( source == ev.target.src || source == document.getElementById(data).src ) {
        continue; 
      }
      
      if ( one == 0 ) {
        one = source;
        document.getElementById("test").innerHTML += "<br>one: " + one;
      }
      else if ( one != 0 && two == 0 ) {
        two = source;
      }
      
      if ( count == 6 ) {
        document.getElementById("drag"+i).src = one;
      }
      else if ( count == 7 ) {
        document.getElementById("drag"+i).src = two;
      }
      else {
        minus2 = i-2;
        // Don't change to dragged/dropped-on objects
        for ( var j = 0; j <= 2; j++ ) {
          if ( document.getElementById("drag"+minus2).src == ev.target.src || document.getElementById("drag"+minus2).src == document.getElementById(data).src )
            minus2--;
        }
        
        document.getElementById("drag"+i).src = document.getElementById("drag"+minus2).src;
      }
      count++;
      
    }  
    */
}

function swap ( a, b ) {
  
  var temp = a;
  document.getElementById("test").innerHTML += "<br" + temp;
  a = b;
  document.getElementById("test").innerHTML += "<br>a: " + a;
  b = temp;
  document.getElementById("test").innerHTML += "<br>b: " + b;
  
}