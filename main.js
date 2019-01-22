/*
main.js
create 2019/01/21
Kosuke Zaizen
*/

wCenter = window.innerWidth/2;
hCenter = window.innerHeight/2;

function startGame(){
  setPage("01");
  changePage();

  for(i=wCenter-40; i<wCenter+40; i++){
    for(j=hCenter-25; j<hCenter+25; j++){
      createChar(".", "particle", i, j);
    }
  }

  makeMethodForEachTime("particle",

    function(){
      rand = Math.floor( Math.random() * 3 ) - 1;
      this.style.top = parseInt(this.style.top) + rand + "px";

      var rand = Math.floor( Math.random() * 3 ) - 1;
      this.style.left = parseInt(this.style.left) + rand + "px";
    }
  );

  setInterval("nextTime()",10);
}


