function searchData(id, group, start) {
  let filter, x, elm, input, target
  input = document.getElementById(`${id}_search`)
  console.log(input)
  filter = input.value.toUpperCase();
  target = document.getElementById(`${id}_list`);
  elm = target.getElementsByTagName(`${group}`);
  if(start == undefined){
    start = 0;
  }
  for(let i = start; i < elm.length; i++){
    x = elm[i].innerText || elm[i].textContent;
    if(x.toUpperCase().indexOf(filter)> -1){
      elm[i].style.display = "";
    }else{
      elm[i].style.display = "none";
    }
  }
}