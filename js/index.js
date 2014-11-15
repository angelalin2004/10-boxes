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
      
    }  
}

function swap ( a, b ) { 
  var temp = a;
  document.getElementById("test").innerHTML += "<br" + temp;
  a = b;
  document.getElementById("test").innerHTML += "<br>a: " + a;
  b = temp;
  document.getElementById("test").innerHTML += "<br>b: " + b; 
}

var sources_const = [];

function randomize ( ) {

  for ( var i = 1; i <= 10; i++ ) {
    /* stores all srcs */
    sources_const[i-1] = document.getElementById("drag"+i).src;
  }
  
  var sources = sources_const;
  var ind;
  for ( var i = 1; i <= 10; i++ ) {
    do {
      ind = Math.floor(Math.random()*10);
    } while ( sources[ind] == 0 );
    document.getElementById("drag"+i).src = sources[ind];
    sources[ind] = 0;
  }
}

function reset ( ) {
  for ( var i = 1; i <= 10; i++ ) {
    document.getElementById("drag"+i).src = sources_const[ind-1];
  }
}