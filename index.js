//import card from "./blog/card.js";
import siteDetails from "./sitesDetails.js";
import generateSite from "./blog/card.js";

const aboutContent = document.getElementById("aboutContent");
const showPortfolio = document.getElementById("showPortfolio");
const portfolioBtn = document.getElementById("portfolioBtn");
const portfolio__profile = document.getElementById("profile");
const portfolio__contact = document.getElementById("contactSection");
const moreDetails = document.getElementById("moreDetails");
const dropDowmMenu = document.getElementById("dropDowmMenu");
const cards = document.getElementsByClassName("card");
const faAnimations = [
  `fa-beat`,
  `fa-beat-fade`,
  `fa-bounce`,
  `fa-fade`,
  `fa-flip`,
  `fa-shake`,
  `fa-spin`,
  `fa-spin-reverse`,
  `fa-spin-pulse`,
];
const getFaAnimations = document.getElementsByClassName("faAnimations");

console.log(getFaAnimations[0].classList.length);
setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 10);
  getFaAnimations[0].classList.remove(getFaAnimations[0].classList[2]);
  getFaAnimations[0].classList.add(faAnimations[randomNumber]);
}, 5000);

const displaySites = () => {
  portfolio__profile.style.display = "none";
  aboutContent.style.display = "none";
  portfolio__contact.style.flex = "2%";
  if (cards.length === 0) {
    for (let i = 0; i < siteDetails.length; i++) {
      const getSite = generateSite(i);

      const setAbout = about.insertAdjacentHTML("beforeend", getSite);
    }
  }

  if (cards.length > 0) {
    const title = (document.title = "John | Portfolio");
    //portfolio__profile.style.display = "none";
    moreDetails.open = false;
    moreDetails.style.zIndex = 1;
  }
};

const about = document.getElementById("about");
showPortfolio.addEventListener("click", displaySites);
portfolioBtn.addEventListener("click", displaySites);

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
    cards.length > 0
      ? (portfolio__profile.style.display = "none")
      : (portfolio__profile.style.display = "block");
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
};
document.addEventListener("DOMContentLoaded", handleScreenResize);
window.addEventListener("resize", handleScreenResize);
