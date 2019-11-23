// creating classes using ES6


class Employee {
    constructor(name,salary,experience)
    {
        this.name = name;
        this.salary=salary;
        this.experience=experience;
    }
    slogan()
    {
        return `this is the best company ever, Regards ${this.name}`
    }
    joiningYear()
    {
        return 2019 - this.experience;
    }

    // static methods : these methods can be accessed directly without creating instance/object of a class
    
    // this keyword cannot be used with static methods
    static addNumbers(a,b)
    {
        return a+b;
    }
}

let Empl1 = new Employee('shubham',1312312,4);

console.log('emp1 details',Empl1);
console.log('employee 1`s slogan is',Empl1.slogan())
console.log('joining year',Empl1.joiningYear())


// accesing the static method directly
console.log('accesing the static method',Employee.addNumbers(2222222,2222222));



// inheritance using es6

class Programmer extends Employee{
    constructor(name,salary,experience,language){
        super(name,salary,experience);
        this.language=language;
    }

    favoriteLang()
    {
        if(this.language === 'python')
        {
            return 'Python';
        }
        else{
            return 'JS';
        }
    }
    static multiply(a,b)
    {
        return a*b;
    }
}

let shubham = new Programmer('shubham Gupta',1000000,4,'JS');
console.log(shubham)
console.log('fav lang:::',shubham.favoriteLang())
console.log(Programmer.multiply(123,912))