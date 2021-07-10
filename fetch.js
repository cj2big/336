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
