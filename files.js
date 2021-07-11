let elm = document.createElement("TABLE");
elm.setAttribute("class", "striped");
elm.setAttribute("id", "files_list");
document.getElementById("files").appendChild(elm);
fetch(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7izqfiaPLsMd9TXs7vAbVdeAj6SmH0RBXmj8hg2w_76O2nys2JXSmRDitAxoAHGEOaDTVlDKww52-/pub?gid=1062704823&single=true&output=tsv#22",
  { cache: "no-store" }
)
  .then(response => response.text())
  .then(data => {
    data = data.split(/\r?\n|\r/);
    let x, y, z;
    let th = document.createElement("THEAD");
    let tb = document.createElement("TBODY");
    document.getElementById("files_list").appendChild(th);
    document.getElementById("files_list").appendChild(tb);
    x = data[0].split("\t");
    y = document.createElement("TR");
    z = "";
    x.forEach(x => {
      z += `<th>${x}</th>`;
    });
    y.innerHTML = z;
    th.appendChild(y);
    let viewFile;
    for (let i = 0; i < x.length; i++) {
      if (x[i] == "Link") {
        viewFile = i;
      }
    }
    for (let i = 1; i < data.length; i++) {
      z = "";
      x = data[i].split("\t");
      y = document.createElement("TR");
      for (let j = 0; j < x.length; j++) {
        let val = x[j];
        if (viewFile == j && val !== "") {
          val = `<a target="_blank" href="${val}">View</a>`;
        }
        z += `<td>${val}</td>`;
      }
      y.innerHTML = z;

      tb.appendChild(y);
    }
    searchUrl();
  });
