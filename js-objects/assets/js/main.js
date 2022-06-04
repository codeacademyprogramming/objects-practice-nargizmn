/* 
    Dear teacher,

    I haven't looked any solutions which were given below the tasks. 
    So if there are any similarites with my solutions, it's nothing but a coincidence.
    Actually, I think it's not quite possible to come up with the different solutions about these tasks, 
    because they are too straightforward. 
    Anyway, it's simply a little problem I have to deal with for being so intelligent. 
    Just kidding. Don't get mad. Thanks. */



//Task1
const user = {
    name : "John",
    surname : "Smith",
}

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);





//Task2
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

console.log(isEmpty(user))





//Task3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  function salarySum(obj){
    let sum = 0;
    for(let key in obj){
        sum += obj[key];
    }
    return sum;
}

console.log(salarySum(salaries));





//Task4
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);

  console.log(menu);