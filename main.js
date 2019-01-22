/*
main.js
create 2019/01/21
Kosuke Zaizen
*/


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
      randX = Math.floor( Math.random() * 3 ) - 1;
      randY = Math.floor( Math.random() * 3 ) - 1;

      this.move(randX, randY);
    }
  );

  setInterval("nextTime()", 10);
}


