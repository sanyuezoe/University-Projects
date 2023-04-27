const textElement = document.getElementById('text');
const continueButton = document.querySelector(".continue");

let currentItem = 0;

const textNodes = [
    {
        text:'You hold a shinning bracelet in your hand. \n\n  This bracelet has a story. '
    },
    {
        text:'Listen'
    },

    {  
        text:'How would you describe the voice of the woman?'
    },

    {   
        text:'Listening to her voice, how do you think she feels as she tells the story? \n\n What kind of emotional impact does the memory have on her?'
    },
    
    {
        
        text:'What is her message?'
    },

    {
       
        text:'Open up the kerchief, feel the fabric and the presence that was there.'
    }
]


window.addEventListener('DOMContentLoaded', function(){
  changeText();
})

function changeText(){
  const item =textNodes[currentItem];
  textElement.textContent = item.text;
}




continueButton.addEventListener('click', function(){
  currentItem++;
  if(currentItem > textNodes.length - 1){
    currentItem = 0;
  }
  changeText();


});


