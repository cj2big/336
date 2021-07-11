let quickLinks = document.createElement("DIV");
quickLinks.setAttribute("id", "quicklinks_list");
quickLinks.setAttribute("class", "row");
document.getElementById("quicklinks").appendChild(quickLinks);
fetch(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7izqfiaPLsMd9TXs7vAbVdeAj6SmH0RBXmj8hg2w_76O2nys2JXSmRDitAxoAHGEOaDTVlDKww52-/pub?gid=1376863477&single=true&output=tsv"
)
  .then(response => response.text())
  .then(data => {
    data = data.split(/\r?\n|\r/);
    data.shift();
    data.forEach((val, i, a) => {
      let name,
        access,
        link,
        desc,
        image,
        target = "";
      let html = document.createElement("DIV");
      html.setAttribute("class", "col s12 m6 searchable");
      val = val.split("\t");
      name = val[0];
      access = val[1];
      link = val[2];
      desc = val[3];
      image = val[4];
      if (link.includes(location.host) == false) {
        target = 'target="_blank"';
      } else {
        target = "";
      }
      html.innerHTML = `
          <div class="card small blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${name}</span>
              <p>Access Type: ${access}</p>
              <br>
              <p>${desc}</p>
            </div>
            <div class="card-action">
              <a ${target} href="${link}">Open</a>
            </div>
          </div>
    `;
      document.getElementById("quicklinks_list").appendChild(html);
    });
    searchUrl();
  });
