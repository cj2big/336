let links = [
  {
    text: "Home",
    href: "#"
  },
  {
    text: "Contacts",
    href: "#contacts"
  },
  {
    text: "F.A.Q.",
    href: "#faq"
  },
  {
    text: "Files",
    href: "#files"
  },
  {
    text: "Q-Links",
    href: "#quicklinks"
  },
  {
    text: "Wolf Shack",
    href: "https://336wolfshack.square.site/s/shop",
    type: "link",
    target: "_blank"
  },
  {
    text: "AF Portal",
    href: "https://www.my.af.mil/",
    type: "link",
    target: "_blank"
  }
];
async function navLinks(id) {
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
