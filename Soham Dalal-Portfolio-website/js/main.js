let mybutton;

window.addEventListener("load", () => {
  let hours = new Date().getHours();
  if (hours <= 7 || hours >= 19) {
    document.querySelector("#switch").checked = true;
    setTheme("dark");
  }

  document.querySelector("#switch").addEventListener("click", e => {
    if (e.target.checked) setTheme("dark");
    else setTheme("light");
  });
  $(".navbar-nav>li>a").on("click", () => {
    $(".navbar-collapse").collapse("hide");
  });

  //Get the button
  mybutton = document.getElementById("myBtn");
  // When the user scrolls down 20px from the top of the document, show the button
  window.addEventListener("scroll", scrollFunction);

  new Typed(".typing", {
    strings: [
      "",
      "Engineer",
      "UG at Academy Of Technology",
      "Developer",
      "Designer",
      "Blog Writer",
      "Open-Source Enthusiast",
    ],
    loop: true,
    typeSpeed: 40,
    backSpeed: 30,
  });
});

function setTheme(theme) {
  if (theme == "light") document.body.classList.remove("dark");
  else if (theme == "dark") document.body.classList.add("dark");
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    mybutton.style.display = "block";
  else mybutton.style.display = "none";
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}