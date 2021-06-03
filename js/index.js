const ham = document.getElementById("hamburger");
const nav = document.getElementsByClassName("mobile-nav")[0];

const selectHam = () => {
  const classes = Array.from(ham.classList);
  const closed = classes.includes("hamburger-closed");
  const open = classes.includes("hamburger-open");
  const close_img = document.querySelector(".hamburger img:last-child");
  const open_img = document.querySelector(".hamburger img:first-child");

  if (closed) {
    ham.classList.remove("hamburger-closed");
    ham.classList.add("hamburger-open");
    open_img.style.display = "block";
    close_img.style.display = "none";
    nav.style.opacity = 0;
  }

  if (open) {
    ham.classList.remove("hamburger-open");
    ham.classList.add("hamburger-closed");
    open_img.style.display = "none";
    close_img.style.display = "block";
    nav.style.opacity = 1;
  }
};
