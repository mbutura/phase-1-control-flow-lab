function scuberGreetingForFeet(value){
  // Write your code here!
  switch(true){
    case value <= 400:
      return 'This one is on me!';
    case value > 2000 && value <= 2500:
      return 'I will gladly take your thirty bucks.'
      case value > 2500:
        return 'No can do.';
  }
}

function ternaryCheckCity(value){
  // Write your code here!
 return value === 'NYC'?'Ok, sounds good.':'No go.';
}

function switchOnCharmFromTip(value){
  // Write your code here!
  switch(true){
    case value === 'generous':
      return 'Thank you so much.';
    case value === 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.';
  }
}