/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/



/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// check does section in the viewport
const isSectionInViewport = function (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// set the section class active
function activeSection(sect) {
    sect.setAttribute('class','your-active-class');
}
// set the section class inactive
function inactiveSection(sect) {
    sect.setAttribute('class','');
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// create the sections
function createSections(sectionId,sectionData,activeState,sectionHeader,sectionBody) {
    // add <section>
    const sectionTag = document.createElement('section');
    // set the section attributes
    sectionTag.setAttribute('id',sectionId);
    sectionTag.setAttribute('data-nav',sectionData);
    sectionTag.setAttribute('class',activeState);
    // add <div>
    const divTag = document.createElement('div');
    divTag.setAttribute('class','landing__container');
    // add <h2>
    const hTag = document.createElement('h2');
    // set the section header text
    hTag.innerText = sectionHeader;
    // append <h2> to <div>
    divTag.appendChild(hTag);
    // add <p> and append <p> to <div>
    for (let i = 0; i < sectionBody.length; i++){
        const pTag = document.createElement('p');
        pTag.innerText = sectionBody[i];
        divTag.appendChild(pTag);
    }
    // append <div> to <section>
    sectionTag.appendChild(divTag);
    // append <section> to <main>
    const pageMain = document.getElementById('page__main');
    pageMain.appendChild(sectionTag);

    // after new section created, also create new section list item in navBar
    addItemInNav(sectionId,sectionHeader);
}

// build the nav
function addItemInNav(sectionId,sectionHeader){
    // add <li> with class = "menu__link"
    const navListTag = document.createElement('li');
    navListTag.setAttribute('class','menu__link');
    // add <a href="#sectionId>sectionHeader</a>
    const navClickLinkTag = document.createElement('a');
    navClickLinkTag.href = `#${sectionId}`;
    navClickLinkTag.innerText = `${sectionHeader}`;
    // append <a> to <li>
    navListTag.appendChild(navClickLinkTag);
    // append <li> to <ul> with id = "navbar__list"
    const navUlTag = document.querySelector('#navbar__list');
    navUlTag.appendChild(navListTag);
}

// call createSection function to create sections
createSections(
    'section1',
    'section 1',
    'your-active-class',
    'Section 1',
    ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
        'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.']
);
createSections(
    'section2',
    'section 2',
    '',
    'Section 2',
    ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
        'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.']
);
createSections(
    'section3',
    'section 3',
    '',
    'Section 3',
    ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
        'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.']
);
createSections(
    'section4',
    'section 4',
    '',
    'Section 4',
    ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
        'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.']
);
createSections(
    'section5',
    'section 5',
    '',
    'Section 5',
    ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
        'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.']
);

// create go back to top button
//Get the button
const toTopButton = document.getElementById("toTopBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const sectionOne = document.querySelector('#section1');
    const sectionHeight = sectionOne.getBoundingClientRect().height;
    if (document.body.scrollTop > sectionHeight || document.documentElement.scrollTop > sectionHeight) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Add class 'active' to section when near top of viewport
const sections = document.querySelectorAll('section');
window.addEventListener('scroll',function () {
    // check which section is in the viewport
    for(const section of sections){
        // if the section in the viewport
        if(isSectionInViewport(section)){
            console.log('in the viewport!!!!');
            // set the section class active
            activeSection(section);
        }
        else{
            console.log('Nope, not in viewport....');
            // if not, set the section class inactive
            inactiveSection(section);
        }
    }
}, false);


