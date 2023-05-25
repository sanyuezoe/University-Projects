const intro = [
  {
    introText:"Domestic violence has become a prominent problem in Italy since the pandemic, and the confinement that ensued. Italy's rate of femi(ni)cides has risen 8% from 106 in 2020 to 109 in 2021."
  },
  {
      introText:"Both geographical as well as social isolation are factors that can lead to increased violence among people living together and, consequently, to a reduction of social support and the network. Isolation as a state strategy for pandemic management leads to a higher risk of domestic violence that stays hidden inside the private home.",
  },
  {
      introText:"A study examining newspaper reports during the pandemic identifies nine categories of violence against women: battering, aggression with weapon, psychological violence, homicide, homicide-suicide, sexual violence, stalking, threat or maltreatment and attempted murder.",
   },
  {
      introText:"One in four Italian considers violence against women is not violence.Violence against women is patriarchal violence. As such it not only concerns cis-women but also transgender persons, who have a high risk of experiencing violence in our society.",
  },
  {
      introText:"Thus the public often only talks about violence against women, excluding transphobic violence from the issue.Additonal there is a higher risk for Black, Indigenous and People of Colour to become a victim sexual violence. This means that women and transgender people who experience racism are even more vulnerable to sexual violence.",
  },
  {
      introText:"We need to talk about patriarchal violence.",
  }
];


const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

const introEl = document.getElementById("intro")
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const offset = 50;
let currentItem = 0;

menuBtn.addEventListener("click", function() {
  menu.classList.toggle ("menu-open");
});

//add scroll event listener to the page
window.addEventListener("scroll", function(){
  //if the page is scrolled by 50px or more
  if (scrollY > offset) {
    menuBtn.classList.add("menu-btn-scroll");
  } else {
    //deactivate navbar
    menuBtn.classList.remove("menu-btn-scroll");
  }
});


window.addEventListener("DOMContentLoaded", function () {
  changeText();
});


function changeText() {
  const item = intro[currentItem];
  introEl.textContent = item.introText;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > intro.length - 1) {
    currentItem = 0;
  }
  changeText();
});


prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = intro.length - 1;
  }
  changeText();
});


