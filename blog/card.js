import siteDetails from "../sitesDetails.js";

const generateSite = (index) => {
  const card = `
<section class="card" style="width: 95%; margin-top: 50px;   padding: 20px; border-radius: 10px;">
<div style="display: flex; justify-content: space-around; position: relative;">
    <img  src=${siteDetails[index].desktop} width="100%"   alt=${siteDetails[index].name}>
    <img  src=${siteDetails[index].mobile} width="25%" style="position: absolute; right: 0%; bottom: 25px;"   alt=${siteDetails[index].name}>

</div>


<section class="card__siteRepo" style="display: flex; justify-content: space-between; padding: 10px; ">
    <a href=${siteDetails[index].visitLink}  class="card__siteRepo--menu" style="display: flex; color:black; justify-content: space-around;">
    <i class="fa-solid fa-circle fa-fade" style="color: #2ec27e; padding: 10px;"></i>
    <span class="card__siteRepo--menu--text" style="padding: 10px;">${siteDetails[index].condition}</span>

        </a>
    
 
    <a href=${siteDetails[index].repoLink}  class="card__siteRepo--menu"  style="display: flex; color:black; justify-content: space-around;">
        <span class="card__siteRepo--menu--text"  style="padding: 10px; font-size: small;">Visit Repository</span>
        <i class="fa-solid fa-circle fa-fade" style="color: #1a5fb4; padding: 10px;"></i>
        
        </span>
    </a>
</section>
<article style="text-align: center; color: #414141; padding: 10px; max-height: 100px; overflow: scroll;">
    <p>${siteDetails[index].discription}</p>
    
    
</article>
<div style="display: flex; justify-content: space-around;">
<details  style="padding: 10px 30px; font-weight: bolder; font-size: large; background-color: #3e00ce; color: white; border-radius: 10px; ">
<summary>Contributors</summary>
<a style="color: white; text-decoration: none;" href=${siteDetails[index].contributorsGithub} target="_blank" rel="noopener noreferrer">${siteDetails[index].contributors}</a>
</details>

</div>
</section>
`;
  return card;
};
export default generateSite;
