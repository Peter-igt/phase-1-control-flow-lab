function (distanceInFeet){
  let fare;

  if (distanceInFeet <=400)
    fare = 0;
  
}  if (distanceInFeet <= 400) {
  fare = 0;
} else if (distanceInFeet > 400 && distanceInFeet < 2000) {
  fare = (distanceInFeet - 400) * 0.02;
} else if (distanceInFeet >= 2000 && distanceInFeet <= 2500) {
  fare = 25;
} else {
  fare = 'cannot travel that far';
}

return fare;
}

function ternaryCheckCity(city) {
return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
switch (tip) {
  case 'generous':
    return 'Thank you so much.';
  case 'not as generous':
    return 'Thank you.';
  default:
    return 'Bye.';
}
}   
  





