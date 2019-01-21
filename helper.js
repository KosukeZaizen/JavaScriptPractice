/*
helper.js
create 2019/01/21
Kosuke Zaizen
*/

var curPage = "00";

function initial(){
  changePage();
}

function setPage(num){
  curPage = num;
}



function changePage(){
  arrAllPages = document.querySelectorAll(".pageDiv");

  for (i = 0; i < arrAllPages.length; i++){
    objPage = arrAllPages[i];

    if(objPage.id == "page" + curPage){
      show(objPage);
    } else {
      hide(objPage);
    }
  }
}

function gebId(id){
  return document.getElementById(id);
}

function hide(obj){
  obj.style.display="none";
}

function show(obj){
  obj.style.display="block";
}

