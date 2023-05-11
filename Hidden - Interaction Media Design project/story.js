const stories = {
  story1 : {
        name:"bracelet",
        text:"Hold the bracelet in your hand. Turn the bracelet around. Try to be very careful with it. The bracelet reminds you of your grandmother. She had a similar one. But it is also a very ordinary bracelet, one many might have worn before.",
        audio:"https://static.wixstatic.com/mp3/3a453c_5882efd92bce4a4e85c811529f301f1e.mp3",
  },

  story2:{
        name:"kerchief",
        text:"You realize, you had seen such a kerchief before. It is worn by Latin American acitivists while marching through the streets. The feminist protests against feminicides also arrived in Europe and Italy. Wearing the kerchief as a symbol of collective resistance against patriarchal violence.",
        audio:"https://static.wixstatic.com/mp3/3a453c_a0c41b5611694d179a1a056fafd87d28.m4a"
  },
  story3 : {
    name:"earring",
    text:"You wonder if this earring in your hand has been broken through an act of violence.You want to know more about what you could do if this would be the case and how to save it.Like the woman in the story you just heard saved herself and her children.You want to know how to react.",
    audio:"#"
  }

  }

const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

const offset = 50;


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



$(document).ready(function() {
  function renderStory(objectTitle, instructions, audioSource, faBtnContent) {
    $('#story-section').html(`
      <div class="story-body">
        <h2 class="obj-title">${objectTitle}</h2>
        <h2 class="warning">Content Warning: The following story contains a detailed narrative about physical and psychic violence and injuries.</h2>
        <h2>${instructions}</h2>
        <audio controls autoplay id="player">
          <source src="${audioSource}" type="audio/mpeg">
          Your browser does not support the audio tag.
        </audio><br>
        <a class="back-btn" href="story.html"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
        <button id="fa-btn"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
      </div>
    `);
   

    $('#fa-btn').click(function() {
      $('#story-section').html(`
        <div class="story-body">
          <h2>${faBtnContent}</h2>
          <div class="message-box">
              <textarea placeholder="Think of what could have been done"rows="10" cols="100"></textarea>
              <br>
              <div class="wrapper">
                  <button class="input-btn" id="input-btn">
                    <span>Submit</span>
                  </button>
              </div>
          </div>
        </div>
      `);
    });
  }

  $('#obj-bracelet').click(function() {
    renderStory(
      "This bracelet has a story.",
      "Listen.<br> How would you describe the woman’s voice?<br> Listening to her voice, how do you think she feels as she tells the story? <br> What kind of emotional impact does the memory have on her?<br> What made her decide to leave, or ask for help?<br> What is her message to the listener?<br> Hold the bracelet in your hand. Turn the bracelet around. <br> Try to be very careful with it.",
      "https://static.wixstatic.com/mp3/3a453c_5882efd92bce4a4e85c811529f301f1e.mp3",
      "The bracelet reminds you of your grandmother. <br>She had a similar one. <br>But it is also a very ordinary bracelet, one many might have worn before.<br>You want to react to what you just heard. <br>The story of the woman is stuck in your head..",
    );
  });

  $('#obj-kerchief').click(function() {
    renderStory(
      "This kerchief has a story.",
      "Listen.<br> Open up the kerchief. Feel the fabric.<br> How would you describe the woman’s voice?<br> Listening to her voice, how do you think she feels as she tells the story? <br> What kind of emotional impact does the memory have on her?<br> What is her message?",
      "https://static.wixstatic.com/mp3/3a453c_a0c41b5611694d179a1a056fafd87d28.m4a",
      "You realize, you had seen such a kerchief before.<br> It is worn by Latin American acitivists while marching through the streets.<br> The feminist protests against feminicides also arrived in Europe and Italy.<br> Wearing the kerchief as a symbol of collective resistance against patriarchal violence.",
    );
  });

  $('#obj-earring').click(function() {
    renderStory(
      "This earring has a story.",
      "Listen.<br> Open up the kerchief. Feel the fabric.<br> How would you describe the woman’s voice?<br> Listening to her voice, how do you think she feels as she tells the story? <br> What kind of emotional impact does the memory have on her?<br> What is her message?<br> If you could say something to her, what would it be?<br> Think about the earring that was broken. The life that it once belonged to, that might have been broken too.",
      "#",
      "You wonder if this earring in your hand has been broken through an act of violence.<br> You want to know more about what you could do <br> if this would be the case and how to save it.<br>Like the woman in the story you just heard saved herself and her children.<br>You want to know how to react."
    );
    });
})

window.addEventListener("DOMContentLoaded", function () {
  setup()
});

function setup() {
  const options = {
    rootMargin: '0px 0px -200px 0px'
  }

  const obeserver = new IntersectionObserver((entries,
    obeserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obeserver.unobserve(entry.target);
        } else {
          return;
        }
      })
    },
  options)

  const paras = document.querySelectorAll('p');
  paras.forEach ( p => obeserver.observe(p));
}



