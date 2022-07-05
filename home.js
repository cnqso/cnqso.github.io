//To implement:
//Make prices scale up
//Phaser visualization
//Employees that buy things for you at cost of allyshipPS
//    *Different employees have different purchasing algorithms
//    *Most expensive will automatically buy most efficient one- make him like a floating monk
//Make the goal to own all the land in the world
//check out sandcastle clicker
if (getCookie('cookieSave')=='NaN'){
  document.cookie = "cookieSave = 0";
  console.log("No Save file, creating one.");
}
else{
  console.log("Save loaded as "+getCookie('cookieSave'));
}
if (getCookie('cookieAllyship')=='NaN'){
  document.cookie = "cookieAllyship = 0";
  console.log("No Allyship Var, creating one.");
}
else{
  console.log("Allyship loaded as "+getCookie('cookieAllyship'));
}

if (getCookie('cookieAllyshipPS')=='NaN'){
  document.cookie = "cookieAllyshipPS = 0";
  console.log("No AllyshipPS Var, creating one.");
}else{
  console.log("AllyshipPS loaded as "+getCookie('cookieAllyshipPS'));
}

if (getCookie('cookieMalls')=='NaN'){
  document.cookie = "cookieMalls = 0";
  console.log("No Malls Var, creating one.");
}else{
  console.log("Malls loaded as "+getCookie('cookieMalls'));
}
if (getCookie('cookieHouses')=='NaN'){
  document.cookie = "cookieHouses = 0";
  console.log("No Houses Var, creating one.");
}else{
  console.log("Houses loaded as "+getCookie('cookieHouses'));
}

if (getCookie('cookieApartments')=='NaN'){
  document.cookie = "cookieApartments = 0";
  console.log("No Apartments Var, creating one.");
}else{
}

if (getCookie('cookieMonuments')=='NaN'){
  document.cookie = "cookieMonuments = 0";
  console.log("No Monuments Var, creating one.");
}else{
}

var save = 0;
var allyship = 0;
var allyshipPS = 0;
var malls = [0,0,0,0,0];
var loops = 0;
save = getCookie('cookieSave');
allyship = getCookie('cookieAllyship');
allyshipPS = getCookie('cookieAllyshipPS');
malls[1] = getCookie('cookieHouses');
//malls[0] = 30;
malls[2] = getCookie('cookieApartments');
malls[3] = getCookie('cookieMalls');
malls[4] = getCookie('cookieMonuments');
// malls = [0,0,0,0];


setInterval(updateScreen, 100);


function updateScreen(){  
  document.getElementById("allyshipDisplay").innerHTML = "$:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+Math.round(allyship);
  document.getElementById("allyshipPSDisplay").innerHTML = "$/Second:\xa0\xa0"+allyshipPS;
  document.getElementById("housesDisplay").innerHTML = "Houses:\xa0\xa0\xa0\xa0"+malls[1];
  document.getElementById("apartmentsDisplay").innerHTML = "Appts.:\xa0\xa0\xa0\xa0"+malls[2];
  document.getElementById("mallsDisplay").innerHTML = "Malls:\xa0\xa0\xa0\xa0\xa0"+malls[3];
  document.getElementById("monumentsDisplay").innerHTML = "Monuments:\xa0"+malls[4];
    allyshipPS = malls[1]/2+malls[2]*2+malls[3]*25+malls[4]*1000;
    
  if (allyshipPS > 0.49){
  plusOne(allyshipPS/10);
  }
  else{
  }
  loops++;
  document.getElementById("loopsDisplay").innerHTML = "Time elapsed: "+Math.round(this.loops/10);
  if (loops%30 === 0){
    document.cookie = "cookieSave = "+this.save+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    document.cookie = "cookieAllyship = "+this.allyship+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    document.cookie = "cookieAllyshipPS = "+this.allyshipPS+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    document.cookie = "cookieHouses = "+this.malls[1]+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    document.cookie = "cookieApartments = "+this.malls[2]+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    document.cookie = "cookieMalls = "+this.malls[3]+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    document.cookie = "cookieMonuments = "+this.malls[4]+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    console.log("Successfully saved.\nallyship:"+ allyship +"\nallyshipPS:" + allyshipPS+"\n"+ malls);
    console.log("houses:"+malls[1]+"\napartments:"+malls[2]+"\nmalls:"+malls[3]+"\nmonuments:"+malls[4]);
    console.log("Save code: "+save);
  
  /*  document.cookie = "cookieAllyship = "+this.allyship+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    document.cookie = "cookieAllyshipPS = "+this.allyship+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    document.cookie = "cookieHouse = "+this.allyship+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    document.cookie = "cookieApartments = "+this.allyship+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    document.cookie = "cookieMalls = "+this.allyship+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    document.cookie = "cookieMonuments = "+this.allyship+"; expires=Thu, 29 Dec 2021 12:00:00 UTC";
    console.log("Successfully saved.\nallyship:"+ allyship +"\nallyshipPS:" + allyshipPS+"\n"+ malls);
    console.log("houses:"+malls[0]+"\napartments:"+malls[1]+"\nmalls:"+malls[2]+"\nmonuments:"+malls[3]);
    */
  }
  else{
    }
}

function plusOne(extraStuff){
  if (Number(extraStuff) > 0) {
    plusOne();
    this.allyship = this.allyship + extraStuff - 1;
    this.loops++;
  }
  else {
    this.allyship++;
  } 
}

function buyBusiness(type){
  if (type == 'house'){
    if (allyship > 49){
      allyship = allyship - 50;
      this.malls[1]++;
        document.getElementById("alerts").innerHTML = "|You bought a house|";
    }
    else{
      document.getElementById("alerts").innerHTML = "|You are too poor to buy a house|";
    }
    }
    else if(type == 'apartment'){
      if (allyship > 199){
      allyship = allyship - 200;
      this.malls[2]++;
        document.getElementById("alerts").innerHTML = "|You bought an apartment|";
    }
    else{
      document.getElementById("alerts").innerHTML = "|You are too poor to buy an apartment|";
    }
    }
    else if(type == 'mall'){
      if (allyship > 999){
      allyship = allyship - 1000;
      this.malls[3]++;
        document.getElementById("alerts").innerHTML = "|You bought a mall|";
    }
    else{
      document.getElementById("alerts").innerHTML = "|You are too poor to buy a mall|";
    }
    }
    else if(type == 'monument'){
      if (allyship > 99999){
      allyship = allyship - 100000;
      this.malls[4]++;
        document.getElementById("alerts").innerHTML = "|You bought a monument|";
    }
    else{
      document.getElementById("alerts").innerHTML = "|You are too poor to buy a monument|";
    }
    }
    else{
      document.getElementById("alerts").innerHTML = "|This is an error message you shouldn't ever see I would be really shocked if it ever did screenshot it and send it to me if it does|";
    }
  }
    

/* bad idea
function masterLoop(){
var times = 3;
for(var i=0; i < times; i++){
    setTimeout(updateScreen(), 100);
}
}
*/



function clearCookies(){
this.allyship = 0;
this.allyshipPS = 0;
this.malls = [0,0,0,0,0];
this.loops = 0;
this.save = 0;

document.cookie = "cookieAllyship = 0";
document.cookie = "cookieAllyshipPS = 0";
document.cookie = "cookieMalls = 0";
document.cookie = "cookieMonuments = 0";
document.cookie = "cookieApartments = 0";
document.cookie = "cookieHouses = 0";
document.cookie = "cookieSave = 0";
}
function changeColor() {
  document.getElementById("demo").style.color = "violet";
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
  }
}
return "";
}
