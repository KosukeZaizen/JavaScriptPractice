function initial(){
  selectPage("page00")
}

function selectPage(id) {
  arrAllPages = document.querySelectorAll(".pageDiv");

  for (i = 0; i < arrAllPages.length; i++) {
    objPage = arrAllPages[i];

    if(objPage.id == id){
      show(objPage);
    } else {
      hide(objPage);
    }
  }
}

function gebId(id) {
  return document.getElementById(id);
}

function hide(obj) {
  obj.style.display="none";
}

function show(obj) {
  obj.style.display="block";
}

