const firstBtn=document.querySelector('.btn-primary');
const formfild=document.querySelector('.formfild');
const selectid = document.getElementById('selectid');
const birthdateid = document.getElementById('birthdateid');
const maleId =document.getElementById('maleId')
const femaleId =document.getElementById('femaleId');
const isMerried =document.getElementById('petsid');
const description=document.getElementById('description')
const lastname=document.getElementById('lastname');
const id=document.getElementById('usId');
const emailid=document.getElementById('emailid');
const mobileid=document.getElementById('mobileid');




const firstname=document.getElementById("nameid");
const businessStart = document.getElementById('businessStart');
const annualRevenue =document.getElementById('annualRevenue');



firstBtn.addEventListener('click',()=>{
  if(formfild.value===""|| firstname.value==="" || birthdateid.value===""||description.value===""||lastname.value===""
  ||id.value===""||emailid.value===""||mobileid.value===""){
    return
  }else {
    localStorage.setItem('amount',formfild.value);
  localStorage.setItem('reviewDuration',selectid.value);
  localStorage.setItem('birthday',birthdateid.value);
  localStorage.setItem('firstName',firstname.value);
     window.location.replace("https://levan-dolidze.github.io/onlineCreditWithScoring/businessinfo.html");
  // window.location.href = "businessinfo.html";

  }
  
  if(maleId.checked){
    localStorage.setItem('male',maleId.value);
  }
  else if (femaleId.checked){
    localStorage.setItem('female',femaleId.value);
  }
 if (isMerried.checked){
    localStorage.setItem('isMerried',2);
  } else{
    localStorage.setItem('isnotMerried',1);
  }
 


})

 
    
