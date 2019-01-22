/*
main.js
create 2019/01/21
Kosuke Zaizen
*/

intTimeStep = 10;

function startGame(){
  setPage("01");
  changePage();

  //---------char---------
  for(i=wCenter-40; i<wCenter+40; i++){
    for(j=hCenter-25; j<hCenter+25; j++){
      createChar(".", "particle", i, j, 100);
    }
  }

  makeMethodForEachTime("particle",

    function(){
      randX = Math.floor( Math.random() * 3 ) - 1;
      randY = Math.floor( Math.random() * 3 ) - 1;

      this.addForce(randX, randY);
    }
  );


  //---------img---------
  createImg("image/syuu.png", "syuu", wCenter, -200, 300);

  makeMethodForEachTime("syuu",

    function(){
      this.addForce(0, 10);
    }
  );


  setInterval("nextTime()", intTimeStep);
}


