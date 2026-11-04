






const accordionItems = document.querySelectorAll(".accordionItems");
accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
    item.classList.toggle("clicked");
    const accordionContent = item.querySelector(".accordionContent");
        accordionContent.classList.toggle("show");
    
});
});


const menu = document.getElementById("menuIcon");
const hiddenMenu = document.querySelector(".hidden_navLinks");
const closeMenu = document.getElementById("CloseMen");
const Hideplease = document.querySelectorAll("#Linksa a");

menu.addEventListener("click", () => {
  menu.classList.add("hide");
  closeMenu.classList.add("active");
  hiddenMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("hide");
  closeMenu.classList.remove("active");
  hiddenMenu.classList.remove("active");
});


Hideplease.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.remove("hide");
  closeMenu.classList.remove("active");
  hiddenMenu.classList.remove("active");
    })
})

