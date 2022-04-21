let projectsList =
    [{
        "title": "React Store with cart",
        "href": "https://dimitrigoderidze94.github.io/react-store/",
        "src": "./images/Cart.png",
        "sourceCode": "https://github.com/DimitriGoderidze94/react-store"
    },
    {
        "title": "Angular covid statistics",
        "href": "https://dimitrigoderidze94.github.io/angular-covid-statistics/",
        "src": "./images/AngularCovidStatistics.png",
        "sourceCode": "https://github.com/DimitriGoderidze94/angular-covid-statistics"
    },
    {
        "title": "Mini Store",
        "href": "https://dimitrigoderidze94.github.io/miniReactStore/",
        "src": "./images/MiniStore.png",
        "sourceCode": "https://github.com/DimitriGoderidze94/miniReactStore"
    },
    {
        "title": "Random Dogs",
        "href": "https://dimitrigoderidze94.github.io/Random-Dogs/",
        "src": "./images/RandomDog.jfif",
        "sourceCode": "https://github.com/DimitriGoderidze94/Random-Dogs"
    },
    {
        "title": "Github Typeahead",
        "href": "https://dimitrigoderidze94.github.io/Github-typeahead/",
        "src": "./images/TypeAhead.png",
        "sourceCode": "https://github.com/DimitriGoderidze94/Github-typeahead"
    },
    {
        "title": "Currency Converter",
        "href": "https://dimitrigoderidze94.github.io/Currency-Converter/",
        "src": "./images/CurrencyConventer.png",
        "sourceCode": "https://github.com/DimitriGoderidze94/Currency-Converter"
    },
    {
        "title": "Highest grossing movies",
        "href": "https://codepen.io/Goderidze/full/PojzWJp",
        "src": "./images/HighestGrossingMovies.jpg",
        "sourceCode": "https://codepen.io/Goderidze/pen/PojzWJp"
    },
    {
        "title": "US Educational Attainment",
        "href": "https://codepen.io/Goderidze/full/abwZdjJ",
        "src": "./images/UnitedStates.png",
        "sourceCode": "https://codepen.io/Goderidze/pen/abwZdjJ"
    },
    {
        "title": "US GDP",
        "href": "https://codepen.io/Goderidze/full/powyrZj",
        "src": "./images/DopingBicycle.jpg",
        "sourceCode": "https://codepen.io/Goderidze/pen/powyrZj"
    },
    {
        "title": "Calculator",
        "href": "https://codepen.io/Goderidze/full/YzVvxOv",
        "src": "./images/calculator.png",
        "sourceCode": "https://codepen.io/Goderidze/pen/YzVvxOv"
    },
    {
        "title": "25 + 5 clock",
        "href": "https://codepen.io/Goderidze/full/OJmEPMo",
        "src": "./images/countDownClock.png",
        "sourceCode": "https://codepen.io/Goderidze/pen/OJmEPMo"
    },
    {
        "title": "Drum Machine",
        "href": "https://codepen.io/Goderidze/full/wvdjPOY",
        "src": "./images/drumMachine.png",
        "sourceCode": "https://codepen.io/Goderidze/pen/wvdjPOY"
    },
    {
        "title": "Technical Documentation Page",
        "href": "https://codepen.io/Goderidze/full/QWvgrEZ",
        "src": "./images/Technical-Documentation-Page.png",
        "sourceCode": "https://codepen.io/Goderidze/pen/QWvgrEZ"
    }
    ]

let projectsPage = document.createElement("div");
projectsPage.id = "projectsPage";
for (let i = 0; i < projectsList.length; i++) {
    projectsPage.innerHTML +=
        '<div class="flip-card">' +
        '<div class="flip-card-inner">' +
        '<div class="flip-card-front">' +
        '<img class="cardImg" src="' + projectsList[i].src + '" alt="Avatar">' +
        '</div>' +
        '<div class="flip-card-back">' +
        '<div class="verticalCenter">' +
        '<h3>' + projectsList[i].title + '</h3>' +
        ' <a target="blank" class="liveDemo" href="' + projectsList[i].href + '">Live Demo</a>' +
        '<br>' +
        ' <a target="blank" class="sourceCode" href="' + projectsList[i].sourceCode + '">Source Code</a>' +
        ' </div>' +
        '</div>'
}

// Add active class to navigation button

let btnContainer = document.getElementById("navButtonContainer");
let btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

let aboutPage = document.getElementById("aboutPage");
let skillsPage = document.getElementById("skillsPage");

let i = 0;
let txt = 'Hello, I am Dimitri Goderidze. I am a Junior web Developer. This Is My Personal Portfolio. You can see some of my projects here. If you get intrested, you can find my contacts at the end of this page.';
let speed = 5;

function typeWriter() {

    if (document.getElementById("about")) {
        if (i < txt.length) {
            if (txt.charAt(i - 1) === ".") {
                document.getElementById("about").innerHTML += "<br/>"
            }
            document.getElementById("about").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
}


window.onload = function afterWebPageLoad() {
    document.getElementById("main").innerHTML = aboutPage.outerHTML;
    typeWriter();
}



function displayAboutPage() {
    wordNumber = 0;
    document.getElementById("main").innerHTML = aboutPage.outerHTML;
    document.getElementById("about").innerHTML = "";
    typeWriter();
}

function displaySkillsPage() {
    i = 0;
    document.getElementById("main").innerHTML = skillsPage.outerHTML
}

function displayProjectsPage() {
    i = 0;
    document.getElementById("main").innerHTML = projectsPage.outerHTML
}





