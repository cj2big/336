function searchData(id, group, start) {
  let filter, x, elm, input, target;
  try {
    input = document.getElementById(`${id}_search`);
    filter = input.value.toUpperCase();
    target = document.getElementById(`${id}_list`);
    elm = target.getElementsByTagName(`${group}`);
  } catch (error) {
    console.log(error);
    return;
  }
  if (start == undefined) {
    start = 0;
  }
  for (let i = start; i < elm.length; i++) {
    x = elm[i].innerText || elm[i].textContent;
    if (x.toUpperCase().indexOf(filter) > -1) {
      elm[i].style.display = "";
    } else {
      elm[i].style.display = "none";
    }
  }
}
function searchDataByClass(id, c, start) {
  let filter, x, elm, input, target;
  try {
    input = document.getElementById(`${id}_search`);
    filter = input.value.toUpperCase();
    target = document.getElementById(`${id}_list`);
    elm = target.getElementsByClassName(`${c}`);
  } catch (error) {
    console.log(error);
    return;
  }
  if (start == undefined) {
    start = 0;
  }
  for (let i = start; i < elm.length; i++) {
    x = elm[i.innerText] || elm[i].textContent;
    if (x.toUpperCase().indexOf(filter) > -1) {
      elm[i].style.display = "";
    } else {
      elm[i].style.display = "none";
    }
  }
}

/*
Attempted to make this fail-proof
*/
