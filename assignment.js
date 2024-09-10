function calculateTax(income, expenses){

  if((income < 0) || (expenses < 0) || (income < expenses)){
    return 'Invalid Input'
  }

  const difference = income - expenses;
  const result = difference * .2;
  return result

}




function sendNotification(email){
  const sign = '@'
  if(!email.includes('@')){
    return "Invalid Email"
  }
  const result = email.split('@')
 
  const userName = result[0]
  const domainName = result[1]
  
  return `${userName} sent you an email from ${domainName}`

}




function checkDigitsInName(name) {
  if(typeof name !== 'string'){
    return "Invalid Input"
  }
  const digits = '0123456789';

  for(let i of digits){
    if(name.includes(i)){
      return true;
    }
      
    
  }
  return false;
}




function calculateFinalScore(obj) {
  if(typeof obj !== "object"){
    return 'Invalid Input'
  }

  let finalScore = obj.testScore + obj.schoolGrade;
  if(obj.isFFamily){
    finalScore = finalScore + 20 ;
  }

  if(finalScore >= 80){
    return true;
  } else{
    return false;
  }
}




function  waitingTime(waitingTimes, serialNumber) {
  if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
    return "Invalid Input"
  }

  let sum = 0;
  for(let i of waitingTimes){
    sum += i;
  }

  const avg = sum / waitingTimes.length;
  const round = Math.round(avg)
  const waitingToInterview = (serialNumber - 1) - waitingTimes.length;
  const avgTime = waitingToInterview * round;
  return avgTime;
}

