// OBJECT LITERALS

// let car = {
//     name: 'maruti',
//     speed: 89,
//     horn: function(){
//         console.log('maruti car is playing the hornnnnnn');
//     }
// }

// console.log(car);
// console.log(car.name);
// console.log(car.horn());

// creating a classTemplate for using constructor


function GeneralCar(name,speed){
    this.name = name;
    this.speed = speed;
    this.compareSpeed = function()
    {
        console.log(`this ${this.name} car runs at speed of ${this.speed} km/h in comparison to speed of Mercedes running at 100 km/h` )
    }
}

car1 = new GeneralCar('Nissan',80);
console.log('car1 details::',car1);
console.log(car1.compareSpeed());



// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function() {
      console.log(`${this.name} Is Running`);
    };
    this.analyze = function() {
      console.log(
        `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
      );
    };
  }
  car1 = new GeneralCar("Nissan", 180);
  car2 = new GeneralCar("Marutu Alto", 80);
  car3 = new GeneralCar("Mercedes", 200);
  console.log(car1, car2, car3);
  
   