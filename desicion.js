
let amount = JSON.parse(localStorage.getItem("amount"));
let annualRevenue = JSON.parse(localStorage.getItem('annualRevenue'));
let reviewDuration = localStorage.getItem('reviewDuration');
let isnotMerried = localStorage.getItem('isnotMerried');
let male = localStorage.getItem('male');
let businessStart = Date.parse(localStorage.getItem('businessStart'));
let userAgeInput = Date.parse(localStorage.getItem('birthday'));
let businessName =localStorage.getItem('nameid');
let firstName =localStorage.getItem('firstName');

const toDay = new Date();
const userAgeToObject  = new Date(userAgeInput);
const businessStartToObject =new Date(businessStart);

const getUserAge =(today,userBirthhDay)=>{
return today-userBirthhDay;
}
const userAge = getUserAge(toDay.getFullYear(),userAgeToObject.getFullYear())
const businessStartDate = getUserAge(toDay.getFullYear(),businessStartToObject.getFullYear())



let point = 0;
let rejectPoints = 0;

const getLoanRate0_500 =(loanAmount,scorePoint)=>{
if(loanAmount<=500 && scorePoint>=11 &&scorePoint<=13){
    return 36
}
else if(loanAmount<=500 && scorePoint>13 &&scorePoint<=15){
return 24
}
else if((loanAmount<=500 && scorePoint>15)){
return 20
}

else{
    return 36
}


}

const getLoanRate500_1000 =(loanAmount,scorePoint)=>{
    if(loanAmount>500 && loanAmount<=1000 && scorePoint>10 &&scorePoint<=12){
        return 36
    }
    else if(loanAmount>500 && loanAmount<=1000 &&  scorePoint>12 &&scorePoint<=14){
    return 24
    }
    else if(loanAmount>500 && loanAmount<=1000 &&  scorePoint>14){
    return 20
    }
    
    else{
        return 36
    }
    
    
    }
    
const getLoanRate1000_3000 =(loanAmount,scorePoint)=>{
    if(loanAmount>1000 && loanAmount<=3000 && scorePoint>9 &&scorePoint<=11){
        return 36
    }
    else if(loanAmount>1000 && loanAmount<=3000 &&  scorePoint>11 &&scorePoint<=13){
    return 24
    }
    else if(loanAmount>1000 && loanAmount<=3000 &&  scorePoint>13){
    return 20
    }
    
    else{
        return 36
    }
}

const getLoanRate3000_5000 =(loanAmount,scorePoint)=>{
    if(loanAmount>3000 && loanAmount<=5000 && scorePoint>8 &&scorePoint<=10){
        return 36
    }
    else if(loanAmount>3000 && loanAmount<=5000 &&  scorePoint>10 &&scorePoint<=12){
    return 24
    }
    else if(loanAmount>3000 && loanAmount<=5000 &&  scorePoint>12){
    return 20
    }
    
    else{
        return 36
    }
}



const getAmount = () => {

    if (amount <= 500) {
        point += 4
    }
    else if (amount > 500 && amount <= 1000) {
        point += 3
    }
    else if (amount > 1000 && amount <= 3000) {
        point += 2
    }
    else if (amount > 3000 && amount <= 5000) {
        point++
    }

}

getAmount()

const getReviewDuration = () => {
    if(reviewDuration==="24hour"){
        point++;
    }
    else if(reviewDuration==="1-3day"){
        point+=2;
    }
    else if (reviewDuration==="7day"){
        point+=3
    }
    else if(reviewDuration==="moreThanWeek"){
        point+=4
    }

}

getReviewDuration();

const getStatus = () => {
    if(isnotMerried==="1"){
        point++
    }
    else{
      point+=2
    }
  }
  
  getStatus()
  

const getGender = () => {
    if(male==="on"){
        point++
    }
     else{
      point+=2
    }
  
}
getGender()

 const getUserAgeLogic =()=>{
     if(userAge<18 || userAge>65){
         rejectPoints++;
     }
     else if(userAge>=18 && userAge<=50){
         point+=4;
     }
     else if(userAge>50 && userAge<=65){
         point+=2;
     }
 }
 getUserAgeLogic()


 
const getBusinessStartDate = () => {
if(businessStartDate<1){
    point++
}
else if(businessStartDate>1 && businessStartDate<=2){
point+=2
}
else if(businessStartDate>2&&businessStartDate<=3){
point+=3
}
else if(businessStartDate>3){
    point+=4
}
}
getBusinessStartDate()


const getAnnualRevenue = () => {

    if (annualRevenue <= 5000) {
        rejectPoints++
    }
    else if (annualRevenue > 5000 && annualRevenue <= 10000) {
        point++
    }
    else if (annualRevenue > 10000 && annualRevenue <= 20000) {
        point += 2
    }
    else if (annualRevenue > 20000) {
        point += 3
    }

}

getAnnualRevenue()

console.log(point)
console.log(rejectPoints)
const loanRate =  getLoanRate0_500(amount,point);
const loan5001000 = getLoanRate500_1000(amount,point);
const loan10003000 = getLoanRate1000_3000(amount,point);
const loan30005000 = getLoanRate3000_5000(amount,point);


const getDesicion =()=>{
    if(rejectPoints>0){
        const disicion= document.querySelector('.disicion');{
            const rejectLogo = document.createElement('IMG');
            rejectLogo.src='rejectedLogo.jpg';
         disicion.append(rejectLogo)
         const rejectedText = document.createElement('p');
         rejectedText.textContent=`Hello ${firstName}, your company: "${businessName}"  Has not been aproved for credit  `;
         const desicionText =document.querySelector('.desicionText');
         desicionText.append(rejectedText)
            
        }
      
    }
    else{
        const disicion =  document.querySelector('.disicion');
        const approvedLogo = document.createElement('IMG');
        approvedLogo.src="aprovedLogo.png";
        disicion.append(approvedLogo)
        const approvedText = document.createElement('p');
        approvedText.textContent=`Hello ${firstName}, your company: "${businessName}" are approved for credit please call us to review your offer and loan detils `;
        const desicionText =document.querySelector('.desicionText');
        desicionText.append(approvedText)
    }
}
getDesicion()

// console.log("0-500 "+ loanRate)
// console.log("500-1000 "+ loan5001000)
// console.log("1000-3000 "+ loan10003000);
// console.log("3000-5000 "+ loan30005000);