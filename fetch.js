let links = [
  {
    text: "Home",
    href: "#",
    html: ""
  },
  {
    text: "Contacts",
    href: "#contacts",
    data: "contacts.json",
  },
  {
    text: "Shop: Wolf Shack",
    href: "https://336wolfshack.square.site/s/shop",
    target: "_blank"
  }
];
async function navLinks(id) {
  links.forEach(function(link) {
    var target = "";
    if (link.target !== undefined){
      target = `target="${link.target}"`
    }
    document.getElementById(
      id
    ).innerHTML += `<li><a ${target} href="${link.href}">${link.text}</a></li>`;

    if (link.data !== undefined || link.data === "") {
      return;
    }
    fetch(link.data);
  });
}
