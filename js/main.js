fillMail(["dng", "@", "disroot", ".org"], ".dng_disroot");
fillMail(["dngray", "@", "privacytools", ".io"], ".dngray_ptio");

function fillMail(address, fillElement) {
  document.querySelectorAll(`${fillElement}`).forEach(element => {
    element.textContent = "";
    for (i = 0; i < address.length; i++) {
      element.innerHTML += `<span>${address[i]}</span>`;
    }
  });
}

document.querySelectorAll(".onclick-select").forEach(element => {
  element.addEventListener("click", element.select);
});
