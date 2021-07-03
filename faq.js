fetch("https://json.336.zone/faq.json")
  .then(response => response.json())
  .then(async data => {
    data.forEach(val => {
      let x = document.createElement("UL");
      x.setAttribute("class", "collection")
      let html = `
        <li class="collection-item searchable">${val.q}</li>
        <li class="collection-item searchable">${val.a}</li>
  `;
      x.innerHTML = html;
      console.log(x);
      document.getElementById("faq_list").appendChild(x);
    });
  });
