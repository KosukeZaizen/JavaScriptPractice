/*
main.js
create 2019/01/21
Kosuke Zaizen
*/

intTimeStep = 10;

function startGame(){
  setPage("01");
  changePage();



  //---------dots---------
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



  //---------puff---------
  createImg("image/syuu.png", "syuu", wCenter, -200, 300);

  makeMethodForEachTime("syuu",

    function(){
      this.addForce(0, 10);
    }
  );



  //---------fish---------
  for(i=-50; i<50; i++){
    createImg("image/fish.png", "fish", -500 + i, hCenter + i, 300);
  }
  for(i=-50; i<50; i++){
    createImg("image/fish.png", "fish", -3500 + i, hCenter + i, 300);
  }
  for(i=-50; i<50; i++){
    createImg("image/fish.png", "fish", -10000 + i, hCenter + i, 300);
  }
  for(i=-100; i<100; i++){
    createImg("image/fish.png", "fish", -15000 + i, hCenter + i, 300);
  }
  for(i=-100; i<100; i++){
    createImg("image/fish.png", "fish", -15000 + i, hCenter + i, 300);
  }
  for(i=-100; i<100; i++){
    createImg("image/fish.png", "fish", -15000 + i, hCenter + i, 300);
  }


  makeMethodForEachTime("fish",

    function(){
      randX = Math.floor( Math.random() * 11 ) - 4;
      randY = Math.floor( Math.random() * 5 ) - 2;

      this.addForce(randX, randY);
    }
  );


  setInterval("nextTime()", intTimeStep);
}

