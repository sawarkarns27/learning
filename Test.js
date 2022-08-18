const addition = (val1,val2) => {
    return (val1+val2);
}

const subtraction = (val1,val2) => {
    return (val1-val2);
}

const multiplication = (val1,val2) => {
    return (val1*val2);
}

const division = (val1,val2) => {
    return (val1/val2);
} 

const calculations = (Function,val1,val2) => {
    switch (Function) {
      case "addition": {
        return addition(val1,val2);
        break;
      }
      case "subtraction": {
        return subtraction(val1,val2);
        break;
      }
      case "multiplication": {
        return multiplication(val1,val2);
        break;
      }
      case "division": {
        return division(val1,val2);
        break;
      }
      default: {
        return '0';
        break;
      }
    }
}

var callFun = calculations('addition',2,2);
console.log(callFun);



/*const user = [
    {name:"Fidle",technology:"React"},
    {name:"infosys",technology:"Angular"},
    {name:"Wipro",technology:"Vue"}
]

let user2 = [];
user.map(function(arr,key) {
   let nextKey = (parseInt(key)+parseInt(1));
   user2[key] =  {name:arr.name, technology:arr.technology}
   if(nextKey == user.length){
      user2[nextKey] = {name:'LBM', technology:'PHP'} 
   }   
})

console.log(user);
console.log('==================');
console.log(user2);*/



/*const user = [
    {name:"Fidle",technology:"React"},
    {name:"infosys",technology:"Angular"},
    {name:"Wipro",technology:"Vue"}
]

const user2  = JSON.parse(JSON.stringify(user))

console.log(user);
console.log(user2);  

var userCompanyName = user[0].name;  
console.log(userCompanyName); 

var user2CompanyName = user2[0].name;  
console.log(user2CompanyName); 

user2[0].name = 'HHH'

var userCompanyName = user[0].name;  
console.log(userCompanyName); 

var user2CompanyName = user2[0].name;  
console.log(user2CompanyName); */