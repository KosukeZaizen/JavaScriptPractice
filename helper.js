/*
helper.js
create 2019/01/21
Kosuke Zaizen
*/

var curPage = "00";
const objs = [];

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


function gebClass(strClass){
  return document.getElementsByClassName(strClass);
}


function hide(obj){
  obj.style.display="none";
}


function show(obj){
  obj.style.display="block";
}


function addObj(obj){
  objs.push(obj);
}


function createChar(char, strClass, x, y){

  var span = document.createElement('span');

  span.innerHTML = char;
  span.className = strClass;
  span.style.position = "fixed";
  span.style.top = y + "px";
  span.style.left = x + "px";

  gebId("page" + curPage).appendChild(span);

  addObj(span)
}

