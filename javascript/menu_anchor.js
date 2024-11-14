

window.addEventListener('load', () => {
  let buttons = document.querySelectorAll("a.sideBarAnchor");
  let active = document.querySelector("a.sideBarAnchor.active");
  let sections = document.querySelectorAll("section");

  let currentID = ""

  window.onscroll = (event) => {
    //get window top
    let topY = window.scrollY + 40;
    //get sections
    sections.forEach((section) => {
        if (section.offsetTop <= topY){
            // set active to non active
            currentID = section.id;
        }
    });
    if (currentID != null && currentID != active.getAttribute('href').substring(1)){
        active.classList.remove(['active'])
        active.classList.add(['text-black'])
        
        buttons.forEach(btn => {
            if (btn.getAttribute('href').substring(1) == currentID){
                active = btn;
                btn.classList.remove(['text-black'])
                btn.classList.add(['active'])

            }
        });
    }
  };
});
