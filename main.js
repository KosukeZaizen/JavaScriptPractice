/*
main.js
create 2019/01/21
Kosuke Zaizen
*/

intTimeStep = 2;

function startGame(){
  setPage("01");
  changePage();



  //---------dots---------
  for(i=wCenter-40; i<wCenter+40; i++){
    for(j=hCenter-25; j<hCenter+25; j++){
      createChar(".", "particle", i, j, 10);
    }
  }

  makeMethodForEachTime("particle",

    function(){
      randX = Math.floor( Math.random() * 5 ) - 2;
      randY = Math.floor( Math.random() * 5 ) - 2;

      this.addForce(randX, randY);
    }
  );



  //---------puff---------
  createImg("image/syuu.png", "syuu", wCenter, -200, 100);

  makeMethodForEachTime("syuu",

    function(){
      this.addForce(0, 50);
    }
  );



  //---------fish---------
  for(i=-2; i<2; i++){
    createImg("image/fish.png", "fish", -500 + i, hCenter + i, 30);
  }
  for(i=-2; i<2; i++){
    createImg("image/fish.png", "fish", -3500 + i, hCenter + i, 30);
  }


  makeMethodForEachTime("fish",

    function(){
      randX = Math.floor( Math.random() * 31 ) - 14;
      randY = Math.floor( Math.random() * 5 ) - 2;

      this.addForce(randX, randY);
    }
  );


  setInterval("nextTime()", intTimeStep);
}

