// Async function with error handling
const getGithubReposOfUser = async (userName) => {
  let response;
  try {
    response = await fetch(
      `https://www.sodexo.fi/ruokalistat/output/daily_json/152/YYYY-MM-DD`
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("getGithubReposOfUser error", error.message);
  }
  let repos = await response.json();
  return repos;
};
getGithubReposOfUser("mattpe").then((data) => console.log(data));

// Basic fetch as async function
const getGithubReposOfUser1 = async (userName) => {
  let response = await fetch(`https://api.github.com/users/${userName}/repos`);
  let repos = await response.json();
  return repos;
};
getGithubReposOfUser1("mattpe").then((data) => console.log(data));


//----------------------------changing theme color using localstorage--------------------
//            1. elements which color to be change
let content = document.getElementsByClassName("content");
let container = document.getElementsByClassName("container");
let image = document.getElementsByClassName("image");

content[0].style.backgroundColor = localStorage.getItem("color");
container[0].style.backgroundColor = localStorage.getItem("color");
image[0].style.backgroundColor = localStorage.getItem("color");

//            2. button which changes color theme
let button = document.getElementsByClassName("theme");

button[0].addEventListener('click', () => {
  changeTheme();
});

//            3. function call on change color button
let green = "#43E04F";
let blue = "#43c1e0";
let greencolor = true;
const changeTheme = () => {
  if (greencolor) {
    greencolor = false;
    localStorage.setItem("color", blue);
  } else {
    localStorage.setItem("color", green);
    greencolor = true;
  }
  content[0].style.backgroundColor = localStorage.getItem("color");
  container[0].style.backgroundColor = localStorage.getItem("color");
  image[0].style.backgroundColor = localStorage.getItem("color");
};


//            1. elements/menu which is to be shown or hide
let flexContainer = document.getElementsByClassName("flex-container");
let button2 = document.getElementsByClassName("menu");

//            2. button which shows or hides
button2[0].addEventListener('click', () => {
  changeMenu();
});

flexContainer[1].style.display = localStorage.getItem("menu") === 'hide' ? 'none' : 'block';


//            3. function logic to show or hide meny
let menushow = true;
const changeMenu = () => {
  if (menushow) {
    menushow = false;
    localStorage.setItem("menu", 'hide');
  } else {
    localStorage.setItem("menu", 'show');
    menushow = true;
  }
  flexContainer[1].style.display = localStorage.getItem("menu") === 'hide' ? 'none' : 'block';
};

