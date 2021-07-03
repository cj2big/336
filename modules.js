function searchContacts() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search_contacts");
  filter = input.value.toUpperCase();
  ul = document.getElementById("contacts-list");
  li = ul.getElementsByTagName("li");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName("searchable");
    for (var j = 0; j < a.length; j++) {
      var b = a[j].innerText || a[j].textContent;
      if (b.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        j = a.length;
      } else {
        li[i].style.display = "none";
      }
    }
  }
}
function searchData(input, target, list){
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById(input);
  filter = input.value.toUpperCase();
  ul = document.getElementById(target);
  li = ul.getElementsByTagName(list);
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName("searchable");
    for (var j = 0; j < a.length; j++) {
      var b = a[j].innerText || a[j].textContent;
      if (b.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        j = a.length;
      } else {
        li[i].style.display = "none";
      }
    }
  }
}

//:D
