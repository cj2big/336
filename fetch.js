let links = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "Contacts",
    href: "#contacts",
    data: "https://json.336.zone/contacts.json",
  },
  {
    text: "F.A.Q.",
    href: "#faq",
    data: "https://json.336.zone/faq.json"
  },
  {
    text: "Wolf Shack",
    href: "https://336wolfshack.square.site/s/shop",
    target: "_blank"
  },
];
function navLinks(id) {
  links.forEach(function(link) {
    let target;
    if (link.target == undefined) {
      target = "";
    } else {
      target = `target="${link.target}"`;
    }
    document.getElementById(
      id
    ).innerHTML += `<li><a ${target} href="${link.href}">${link.text}</a></li>`;
  });
}
