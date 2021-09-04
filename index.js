const firstBtn = document.querySelector('.btn-primary');
const formfild = document.querySelector('.formfild');
const selectid = document.getElementById('selectid');
const birthdateid = document.getElementById('birthdateid');
const maleId = document.getElementById('maleId')
const femaleId = document.getElementById('femaleId');
const isMerried = document.getElementById('Hasfamily');
const description = document.getElementById('description')
const lastname = document.getElementById('lastname');
const id = document.getElementById('usId');
const emailid = document.getElementById('emailid');
const mobileid = document.getElementById('mobileid');

const firstname = document.getElementById("nameid");
const businessStart = document.getElementById('businessStart');
const annualRevenue = document.getElementById('annualRevenue');

formfild.addEventListener('change', changeButtonStatus);
firstname.addEventListener('change', changeButtonStatus);
birthdateid.addEventListener('change', changeButtonStatus);
description.addEventListener('change', changeButtonStatus);
id.addEventListener('change', changeButtonStatus);
emailid.addEventListener('change', changeButtonStatus);
mobileid.addEventListener('change', changeButtonStatus);


function changeButtonStatus() {
  if (checkInpunts() == false) {
    document.querySelector(".btn-primary").disabled = false
  }
  else {
    document.querySelector(".btn-primary").disabled = true
  }
};

function checkInpunts() {
  if (formfild.value === "" || firstname.value === "" || birthdateid.value === "" || description.value === "" || lastname.value === ""
    || id.value === "" || emailid.value === "" || mobileid.value === "") {
    return true
  } else {
    return false
  }
}

firstBtn.addEventListener('click', () => {
  if (checkInpunts() == true) {
    return
  }
  else {

    localStorage.setItem('amount', formfild.value);
    localStorage.setItem('reviewDuration', selectid.value);
    localStorage.setItem('birthday', birthdateid.value);
    localStorage.setItem('firstName', firstname.value);
    // window.location.replace("businessinfo.html");
    // window.location.href = "businessinfo.html";

  }

  if (maleId.checked) {
    localStorage.setItem('male', maleId.value);
  }
  else if (femaleId.checked) {
    localStorage.setItem('female', femaleId.value);
  }
  if (isMerried.checked) {
    localStorage.setItem('isMerried', 2);
  } else {
    localStorage.setItem('isnotMerried', 1);
  }



})



