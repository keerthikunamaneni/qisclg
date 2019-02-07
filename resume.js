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
  personal(res.personalDetails);
  career(res.CAREEROBJECTIVE);
  education(res.edu1);
  skills(res.TECHNICALSKILLS);
  achieve(res.ACHEIVEMENTS);
  hobby(res.HOBBIES);
});
var main=document.querySelector(".main");
let left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);

function personal(details) {

  let left=document.createElement("div");
  left.classList.add("left");
  main.appendChild(left);

  let left1=document.createElement("div");
  left1.classList.add("left1");
  left.appendChild(left1);

  let image=document.createElement("img");
  image.src=details.image;
  left1.appendChild(image);

 let myname=document.createElement("h1");
 myname.textContent=details.myname;
 left1.appendChild(myname);

 let designation=document.createElement("h1");
 designation.textContent=details.designation;
 left1.appendChild(designation);

 let left2=document.createElement("div");
 left2.classList.add("left1");
 left.appendChild(left2);

 let fname=document.createElement("h2");
 fname.textContent=details.fname;
 left2.appendChild(fname);

 let email=document.createElement("h2");
 email.textContent=details.email;
 left2.appendChild(email);

 let phoneno=document.createElement("h2");
 phoneno.textContent=details.phoneno;
 left2.appendChild(phoneno);

 let address=document.createElement("h2");
 address.textContent=details.address;
 left2.appendChild(address);


}

let right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);

 function career(detaills){
  let careerObj=document.createElement("p");
  careerObj.textContent=detaills.obj;
  right.appendChild(careerObj);

  careerObj.appendChild(document.createElement("hr"));

right.appendChild(careerObj);
  let content=document.createElement("p");
  content.textContent=detaills.co;
  careerObj.appendChild(content);
}
function education(detaills2){
  let educat=document.createElement("p");
  educat.textContent="EDUCATIONDETAILAS";
  right.appendChild(educat);

educat.appendChild(document.createElement("hr"));

  for (i in detaills2){
 let educate=document.createElement("p");
 educate.textContent=detaills2[i].qualification;
 right.appendChild(educate);
 let edu2=document.createElement("p");
 edu2.textContent=detaills2[i].inst;
 educate.appendChild(edu2);
}
}

function skills(detaills2){
  let skil=document.createElement("p");
  skil.textContent="TECHNICALSKILLS";
  right.appendChild(skil);

skil.appendChild(document.createElement("hr"));

  for (i in detaills2){
 let tech=document.createElement("p");
 tech.textContent=detaills2[i].name;
 right.appendChild(tech);
 let tech2=document.createElement("p");
 tech2.textContent=detaills2[i].org;
 tech.appendChild(tech2);
}
}
function achieve(detaills){
 let ach=document.createElement("p");
 ach.textContent=detaills.awdname;
 right.appendChild(ach);

 ach.appendChild(document.createElement("hr"));

right.appendChild(ach);
 let award=document.createElement("p");
 award.textContent=detaills.achive;
 ach.appendChild(award);
}

function hobby(detaills){
 let hob=document.createElement("p");
 hob.textContent=detaills.hobbiesName;
 right.appendChild(hob);

 hob.appendChild(document.createElement("hr"));

right.appendChild(hob);
 let hobb=document.createElement("p");
 hobb.textContent=detaills.hobbie;
 hob.appendChild(hobb);
}
