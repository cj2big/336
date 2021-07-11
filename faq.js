let faq = document.createElement("DIV");
faq.setAttribute("id", "faq_list");
document.getElementById("faq").appendChild(faq);
fetch(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7izqfiaPLsMd9TXs7vAbVdeAj6SmH0RBXmj8hg2w_76O2nys2JXSmRDitAxoAHGEOaDTVlDKww52-/pub?gid=1748494441&single=true&output=tsv#22",
  { cache: "no-store" }
)
  .then(response => response.text())
  .then(data => {
    data = data.split(/\r?\n|\r/);
    for (let i = 1; i < data.length; i++) {
      let x = data[i].split("\t");
      let y = document.createElement("UL");
      y.setAttribute("class", "collection");
      y.innerHTML = `
        <li class="collection-item searchable">${x[0]}</li>
        <li class="collection-item searchable">${x[1]}</li>
    `;
      document.getElementById("faq_list").appendChild(y);
    }
    searchUrl();
  });
