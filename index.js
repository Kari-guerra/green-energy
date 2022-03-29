 // Load your images on page-load
 function preloader() {
    const imagesList = [
       "./img/green-bulb.jpg",
       "./img/solar-panel-house-02.jpg",
       "./img/wind-energy.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);


//Get all buttons in a NODE LIST of buttons (array like structure)
// references to active HTML elements
const resources = {
    btns: document.querySelectorAll('.controls ul li button'),
    dc: document.querySelector('.dynamic-content')
};


/* 
Complete your resource-object that will store the dynamic content.Resource object should 3 sub-objects. Give your sub-objectsmeaningful names. Every sub-object should have the following
properties headingContent, bodyText, imgUrl and imgAlt. 
*/
// Database:
const contents = {
    c1: {
        heading: 'RENEWABLE ENERGY SYSTEMS',
        bodyText: 'Planning for a home renewable energy system is a process that includes analyzing your existing electricity use, looking at local codes and requirements, deciding if you want to operate your system on or off of the electric grid, and understanding technology options you have for your site. Planning for a home renewable energy system is a process that includes analyzing your existing electricity use, looking at local codes and requirements, deciding if you want to operate your system on or off of the electric grid, and understanding technology options you have for your site.',
        imageUrl: './img/green-bulb.jpg',
        imageAlt: 'Green bulb image'
    },
    c2: {
        heading: 'SMALL SOLAR ELECTRIC SYSTEMS',
        bodyText: 'A small solar electric or photovoltaic system can be a reliable and pollution-free producer of electricity for your home or office. Small photovoltaics systems also provide a cost-effective power supply in locations where it is expensive or impossible to send electricity through conventional power lines. A small solar electric or photovoltaic system can be a reliable and pollution-free producer of electricity for your home or office. Small photovoltaics systems also provide a cost-effective power supply in locations where it is expensive or impossible to send electricity through conventional power lines.',
        imageUrl: './img/solar-panel-house-02.jpg',
        imageAlt: 'Solar panel image'
    },
    c3: {
        heading: 'AFFORDABLE ELECTRIC CARS',
        bodyText: 'If you are looking for the most affordable, iZEV-approved battery electric vehicles (BEV), consider these for all under $45,000 MSRP (Manufacturer Suggested Retail Price): Hyundai IONIQ 5 and KONA, Kia Niro and Soul, Volkswagen ID.4, Nissan Leaf, Chevrolet Bolt, and the Mini Cooper SE. If you are looking for the most affordable, iZEV-approved battery electric vehicles (BEV), consider these for all under $45,000 MSRP (Manufacturers Suggested Retail Price): Hyundai IONIQ 5 and KONA, Kia Niro and Soul, Volkswagen ID.4, Nissan Leaf, Chevrolet Bolt, and the Mini Cooper SE.',
        imageUrl: './img/electric-car.jpg',
        imageAlt: 'Eectric car image'
    }
};


// Get the reference to your HTML-container, that will be dynamically loaded from the resource-object. 
// Loading initial content (on the page load)
resources.dc.innerHTML = `
                         <h2>${contents.c1.heading}</h2>
                         <figure>
                         <img src="${contents.c1.imageUrl}" alt"${contents.c1.imageAlt}" />
                         </figure>
                         <p>${contents.c1.bodyText}</p>
                         
                         `;
                         

/* Start your handleSelection function here. */ 
// updatting content based on the button click
let handleClick = e => {
    // fetch the reference to the current button
    let currentButton = e.target;
    // extract the value of data-attribute
    let currentContent = currentButton.dataset.btn;

    // update the content
    resources.dc.innerHTML = `<h2>${contents[currentContent].heading}</h2>
                              <figure>
                                <img src="${contents[currentContent].imageUrl}" alt"${contents[currentContent].imageAlt}" />
                              </figure>
                              <p>${contents[currentContent].bodyText}</p>
                              `;


   for (let btn of resources.btns) {
       if (btn.id) {
           btn.removeAttribute('id');
       }
   }
   currentButton.id = 'active-button';

};
/* Close your handleSelection function here. */  

/* Register all buttons to click event. The event-handler handleSelection will listen 
 for this event to happen. */ 
for (let btn of resources.btns) {
    btn.addEventListener('click', handleClick);
}











