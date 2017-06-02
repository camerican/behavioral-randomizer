let arBehaviors = 
  [ "Nervous"
  , "Asks lots of questions"
  , "Makes early exit"
  , "Interrupts people constantly"
  , "Likes to tell long stories"
  , "Offers lots of compliments"
  , "Asks lots of technical questions"
  , "Asks lots of design questions"
  , "Avoids eye contact"
  , "Avoid eye contact"
  , "Dead fish handshake"
  , "Continuously interrupt"
  , "Early departure"
  , "Stand awkwardly close"
  , "A long talker"
  , "Stand off to the side and observe until someone brings you in"
  , "Awkward Smiler"
  , "Quiet talker"
  , "Excessive note taker"
  , "Talks only about weather"
  , "Hugger"
  , "Off topic subject change"
  , "Fist Bumper"
  , "High Fiver"
  , "Agressive Handshake"
  , "Overly complimentary"
  , "Disagree with everything"
  , "Harass them about working for you"
  ]
  , elStage = document.getElementById("stage")
  , elOl = document.querySelector("ol")
  , elButton = document.querySelector("button")
  , elOrd = document.querySelector("#purple")
  ;
document.addEventListener("DOMContentLoaded",function(){
  elButton.addEventListener("click",function(){
    generateBehavior();
  });
  generateBehavior(true);
});
function generateBehavior(isFirst){
  let prevBehavior = elStage.innerText
    , behavior = arBehaviors.splice(Math.floor(Math.random()*arBehaviors.length),1)[0];
  elStage.innerText = behavior;
  if( !isFirst ) {
    let elLi = document.createElement("li");
    elLi.innerText = prevBehavior;
    elOl.prepend(elLi);
  }
  if( arBehaviors.length == 0 ) {
    elButton.disabled = true;
  }

}