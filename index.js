const firstBtn=document.querySelector('.btn');
const formfild=document.querySelector('.formfild');
const selectid = document.getElementById('selectid');
const birthdateid = document.getElementById('birthdateid');
const maleId =document.getElementById('maleId')
const femaleId =document.getElementById('femaleId');
const isMerried =document.getElementById('petsid');


const firstname=document.getElementById("nameid");
const businessStart = document.getElementById('businessStart');
const annualRevenue =document.getElementById('annualRevenue');
firstBtn.addEventListener('click',()=>{
  localStorage.setItem('amount',formfild.value);
  localStorage.setItem('reviewDuration',selectid.value);
  localStorage.setItem('birthday',birthdateid.value);
  localStorage.setItem('firstName',firstname.value);


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

 
    
