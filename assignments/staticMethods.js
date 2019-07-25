/* 
static method ----- instead of 

static methods are methods that can be called without instantiating the class instelf

they're useful because:

static methods don't go to the instances of the class you create




*/


//devin.chicken();


/* 

get syntax bind an already existing property to a function

*/


//when would i want to calculate something about a property on my class

class Temperature {
    constructor(celsius) {
      this.celsius = celsius;
    }
    get fahrenheit() {
      return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
      this.celsius = (value - 32) / 1.8;
    }
  
    static fromFahrenheit(value) {
      return new Temperature((value - 32) / 1.8);
    }
  }
  
  let temp = new Temperature(22);
  console.log(temp.fahrenheit);
  //getting a fahrenheit property from the function that is called inside, so I already have a property instead of having to do temp.fahrenheit = temp.fahrenheit(); GETTING PROPERTY
  
  temp.fahrenheit = 86;
  console.log(temp.celsius);
  //SETTING value to 86, so then inside the function runs and changes the this.celcius value


  //Static allows us to create an instance differently
  let temp2 = Temperature.fromFahrenheit(212);
  console.log(temp2.celsius)