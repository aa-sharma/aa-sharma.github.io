function active (){
  var searchBar = document.getElementById("search");

  if (searchBar.value == "search"){
    searchBar.value ="";
    searchBar.placeholder = Search;

  }

}


function goBack() {
  window.history.go(-1);
}

function goBack2() {
  window.history.go(-2);
}
