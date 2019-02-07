console.log("details[i]");
function loadJSON(file,callback) {
  var data=new XMLHttpRequest();
  data.overrideMimeType("application/json");
  data.open("GET",file,true);
  data.onreadystatechange=function() {
    if (data.readyState===4 && data.status=="200") {
      callback(data.responseText);
    }
  }
  data.send(null);
}
loadJSON("data.json",function(text) {
  var res=JSON.parse(text);
  console.log(res);
  card1(res.card1);

});
var cards=document.querySelector(".cards");
function card1(details1) {
  for(i in details1)
  {
  let card=document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);
  let image=document.createElement("img");
  image.src=details1[i].image;
  card.appendChild(image);
  let name=document.createElement("h3");
  name.textContent=details1[i].name;
  card.appendChild(name);
  let occ=document.createElement("h2");
  occ.textContent=details1[i].occ;
  card.appendChild(occ);
  let a=document.createElement("a");
  a.href="resume.html";
  card.appendChild(a);
  let profile=document.createElement("h3");
  profile.textContent=details1[i].profile;
  a.appendChild(profile);
}
}
