const secondBtn = document.querySelector('.btn-success');
const nameid = document.getElementById('nameid');
const businessStart = document.getElementById('businessStart');
const annualRevenue = document.getElementById('annualRevenue');
// const street = document.getElementById('street');
// const city = document.getElementById('city');
const companyId = document.getElementById('companyId');
const statement = document.getElementById('statement');
const terms = document.getElementById('terms');


secondBtn.addEventListener('click', () => {
    if (nameid.value === "" || companyId.value === "" || annualRevenue.value === "" || annualRevenue.value === ""
        || statement.files.length == 0 || !terms.checked) {
        return;
    } else {


        localStorage.setItem('businessStart', businessStart.value);
        localStorage.setItem('annualRevenue', annualRevenue.value);
        localStorage.setItem('nameid', nameid.value);
        window.location.href = "desicion.html";

    }
})




