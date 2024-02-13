
function calculateMoney(ticketSale){
    if(ticketSale<0){
        return "Invalid Number";
    }
    const ticket = ticketSale*120;
    const perday = 500;
    const stafcost= 8*50;
    const totalCost = perday+stafcost;
    const result = ticket-totalCost;
    return result;


}

function checkName(str){
   const lastCh=str.at(-1);
   
    let name = ['a','i','y','e','o','u','w'];
    if(lastCh==='a'||lastCh==='i'||lastCh==='y'||lastCh==='e'||lastCh==='o'||lastCh==='u'||lastCh==='w'){
        return 'Good Name';
    }
    else{
        return 'Bad Name'
    }
    
}

function deleteInvalids (array){
   
    let num =[];
    for (const numbers of array) {
        
    if(( typeof numbers)== 'number'&& !isNaN(numbers)){
        num.push(numbers);
        
    }
    
}
    return num;

}

function password(info){
    
    let string = info.birthYear.toString();
    let len =string.length;

    if(typeof info!=="object" ||!info.siteName||!info.name ||!info.birthYear||len!==4){
        return "invalid";
    }
    
    let capitalized=info.siteName.charAt(0).toUpperCase()+info.siteName.slice(1);
    

    return `${capitalized}#${info.name}@${info.birthYear}`;
    

}



function monthlySavings(arr,livingCost){
    let sum = 0;
    if(Array.isArray(arr)==true && typeof livingCost =="number"){
        for (let income of arr) {
            if(income>=3000){
                income= income*0.8;
            }
            sum+=income;
            
        }
        var savings = sum-livingCost;
        if(savings>=0){
            return savings;
        }
        else{
            return "earn more";
        }
        
    

}
else{
    return "invalid input";
}

}



