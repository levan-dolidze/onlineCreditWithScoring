const secondBtn=document.querySelector('.btn-success');
const nameid =document.getElementById('nameid');
const businessStart = document.getElementById('businessStart');
const annualRevenue =document.getElementById('annualRevenue');


    secondBtn.addEventListener('click',()=>{
    
    localStorage.setItem('businessStart',businessStart.value);
    localStorage.setItem('annualRevenue',annualRevenue.value);
    localStorage.setItem('nameid',nameid.value);



    })


 

