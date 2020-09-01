const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const butIsIt = document.querySelector("h1")
butIsIt.innerHTML = siteContent["cta"]["h1"]

const myButton = document.querySelector("button")
myButton.textContent = siteContent["cta"]["button"]

//Nav Build
let ourNav = document.getElementsByTagName('a')
ourNav[0].textContent = siteContent["nav"]["nav-item-1"]
ourNav[1].textContent = siteContent["nav"]["nav-item-2"]
ourNav[2].textContent = siteContent["nav"]["nav-item-3"]
ourNav[3].textContent = siteContent["nav"]["nav-item-4"]
ourNav[4].textContent = siteContent["nav"]["nav-item-5"]
ourNav[5].textContent = siteContent["nav"]["nav-item-6"]

//End of Nav Build

const thisImage = document.getElementById("cta-img")
thisImage.setAttribute('src', siteContent["cta"]["img-src"])
//Image





//Features and About Section
const goesInTheMiddle = document.getElementsByTagName("h4")
goesInTheMiddle[0].textContent = siteContent['main-content']['features-h4']
goesInTheMiddle[1].textContent = siteContent['main-content']['about-h4']
goesInTheMiddle[2].textContent = siteContent['main-content']['services-h4']
goesInTheMiddle[3].textContent = siteContent['main-content']['product-h4']
goesInTheMiddle[4].textContent = siteContent['main-content']['vision-h4']


//Middle Image
const middleImage = document.getElementById("middle-img")
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//Bottom Section
const middleWords = document.getElementsByTagName('p')
middleWords[0].textContent = siteContent['main-content']['features-content']
middleWords[1].textContent = siteContent['main-content']['about-content']
middleWords[2].textContent = siteContent['main-content']['services-content']
middleWords[3].textContent = siteContent['main-content']['product-content']
middleWords[4].textContent = siteContent['main-content']['vision-content']


//Contact 

 


//End of Contact



//Footer Info



//Done!
