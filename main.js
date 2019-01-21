/*
main.js
create 2019/01/21
Kosuke Zaizen
*/


function startGame(){
  setPage("01");
  changePage();

  for(i=0; i<100; i++){
    for(j=0; j<100; j++){
      createChar(".", "particle", window.innerWidth/2, window.innerHeight/2);
    }
  }
  setInterval("nextTime()",10);
}

function nextTime(){
  for (i = 0; i < objs.length; i++){
    var rand;
    obj = objs[i];
    if(obj.className == "particle"){

      rand = Math.floor( Math.random() * 7 ) - 3;
      obj.style.top = parseInt(obj.style.top) + rand + "px";

      var rand = Math.floor( Math.random() * 7 ) - 3;
      obj.style.left = parseInt(obj.style.left) + rand + "px";
    }
  }
}

