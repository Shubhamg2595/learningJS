// PROTOTYPE INHERITANCE


// creating a prototype

const proto = {
    slogan: function(){
        return "this is the best company"
    },
    changeName: function(newName){
        this.name = newName
    }
}

// const shubham = Object.create(proto);
// // console.log(shubham)
// // {}
// // __proto__:
// // changeName: ƒ (newName)
// // slogan: ƒ ()
// // __proto__: Object

 
// shubham.name = 'Shubham Gupta'
// console.log(shubham)
// shubham.changeName('SHUBHAM GUTPA')
// shubham.role = 'programmer';
// console.log(shubham)




// SYNTAX 2 FOR CREATING OBJECT WITH PROTOTYPING


// const shubham = Object.create(proto,{
//     name: {value:'shubham Gupta',writable: true},
//     role:{value:'CODER'}
// })

// // console.log(shubham)

// shubham.changeName('SHUBHAM GUPTA');
// console.log(shubham);



// creating an employee constructor

function Employee(name,salary,experience)
{
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

// slogan

Employee.prototype.slogan = function(){
    return `this is the best company, REgards ${this.name}`
 }

let shubhamObj = new Employee('shubham',1200000,10);
console.log(shubhamObj)
console.log(shubhamObj.slogan())

// inheritance

function Programmer(name,salary,experience,language)
{
    Employee.call(this,name,salary,experience);
    this.language=language;
}

// inheriting employee's prototype in programmer's protoType



Programmer.prototype = Object.create(Employee.prototype);

let Aryann = new Programmer('shubham',1000000,22,'JS , Python');
console.log(Aryann);



console.log(Aryann.slogan())