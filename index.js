import card from "./blog/card.js";

const aboutContent = document.getElementById("aboutContent");
const showPortfolio = document.getElementById("showPortfolio");
const portfolio__profile = document.getElementById("profile");
const portfolio__contact = document.getElementById("contactSection");
const moreDetails = document.getElementById("moreDetails");
const dropDowmMenu = document.getElementById("dropDowmMenu");

const about = document.getElementById("about");
showPortfolio.addEventListener("click", () => {
  portfolio__profile.style.display = "none";
  aboutContent.style.display = "none";
  portfolio__contact.style.flex = "2%";
  const cards = document.getElementsByClassName("card");
  if (cards.length === 0) {
    const setAbout = about.insertAdjacentHTML("beforeend", card);
  }
  if (cards.length > 0) {
    portfolio__profile.style.display = "none";
    moreDetails.open = false;
    moreDetails.style.zIndex = 1;
  }
});

const smallBar = document.getElementById("smallBar");
const logoMobile = document.getElementById("logoMobile");
const mobileFooter = document.getElementById("mobileFooter");

const handleScreenResize = () => {
  const currentWindowSize = window.innerWidth;
  if (currentWindowSize < 1500) {
    smallBar.style.display = "none";
  } else {
    smallBar.style.display = "block";
  }
  if (currentWindowSize < 970) {
    aboutContent.style.left = "20px";
    aboutContent.style.position = "absolute";
    portfolio__profile.style.display = "none";
  } else {
    portfolio__profile.style.display = "block";
  }
  if (currentWindowSize < 650) {
    portfolio__contact.style.display = "none";

    logoMobile.style.display = "inline";
    mobileFooter.style.display = "block";
  } else {
    portfolio__contact.style.display = "flex";
    aboutContent.style.position = "";

    logoMobile.style.display = "none";
    mobileFooter.style.display = "none";
  }
  console.log(currentWindowSize);
};
document.addEventListener("DOMContentLoaded", handleScreenResize);
window.addEventListener("resize", handleScreenResize);
