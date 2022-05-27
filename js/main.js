/*...............................
About section tabs
............................*/
(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabContainer = document.querySelector(".about-tabs");

    tabContainer.addEventListener("click", (event) =>{
        /*If event. target contains 'tab item'  class and not contains 'active' class*/
       if(event.target.classList.contains("tab-item") &&
       !event.target.classList.contains(".active")){
           const target = event.target.getAttribute("data-target");
           //Deactive existing active 'tab-item'
           tabContainer.querySelector(".active").classList.remove ("outer-shadow", ".active");
           //Activate New 'tab-item'
           event.target.classList.add("active", "outer-shadow");
           //Deactive existing active 'tab-content'
           aboutSection.querySelector(".tab-content.active").classList.remove("active");
             //Activate New 'tab-content'
             aboutSection.querySelector(target).classList.add("active");
       }
    })
})();

/*.....................................................
Portfolio Filter and Popup section
.......................................................*/

(() =>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev")
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let itemIndex, slideIndex, screenshots;


    /* Filter Portfolio Items*/

    filterContainer.addEventListener("click", (event)=>{
        if(event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("active")){
            console.log("true");
        }
        else{
            console.log("false");
        }
        console.log(event.target);
        
    })
    

})();