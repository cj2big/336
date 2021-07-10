hashCheck();
window.addEventListener(
  "hashchange",
  function() {
    hashCheck();
  },
  false
);
function hashCheck() {
  console.log("checking hash");
  var hash = location.hash.substr(1);
  var search = false;
  if (hash.includes("?")) {
    var x = hash.split("?");
    hash = x[0];
  }
  var pages = document.getElementsByClassName("page_section");
  var target = "";
  if (hash == "") {
    target = "home";
  }
  for (let i = 0; i < pages.length; i++) {
    if (hash == pages[i].id) {
      pages[i].style.display = "";
    } else if (hash == "") {
      if (pages[i].id == "home") {
        pages[i].style.display = "";
      } else {
        pages[i].style.display = "none";
      }
    } else {
      pages[i].style.display = "none";
    }
  }
  searchUrl();
}
function searchUrl() {
  let hash = location.hash.substr(1);
  let search = false;
  if (hash.includes("?")) {
    let x = hash.split("?");
    hash = x[0];
    search = x[1];
  }
  if (search !== false) {
    document.getElementById(`${hash}_search`).value = search;
    if (hash == "contacts") {
      searchContacts();
    } else if (hash == "faq") {
      searchData(`${hash}_search`, `${hash}_list`, "UL");
    } else if (hash == "files") {
      searchTable(`${hash}_search`, `${hash}_list`, "TR");
    }
  }
}
function searchContacts() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("contacts_search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("contacts_list");
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
function searchData(input, target, list) {
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
function searchTable(input, target, el) {
  let filter, elm, x;
  input = document.getElementById(input);
  filter = input.value.toUpperCase();
  target = document.getElementById(target);
  elm = target.getElementsByTagName(el);

  for (let i = 1; i < elm.length; i++) {
    x = elm[i].innerText || elm[i].textContent;
    if (x.toUpperCase().indexOf(filter) > -1) {
      elm[i].style.display = "";
    } else {
      elm[i].style.display = "none";
    }
  }
}
