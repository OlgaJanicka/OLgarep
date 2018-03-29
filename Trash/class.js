class Car {
    constructor(wheelCount,type){
        this.wheelCount=wheelCount;
        this.type=type;
        this.sound='brum';
    }

     toString () {
         //return "Hi I am a " + this.type;
        return `hi Im a ${this.type} I have ${this.wheelCount} wheels.`
    }
}

class Truck extends Car{
    constructor(wheelCount,UDT){
      super(wheelCount,"truck");  
      this.UDT=UDT;
    }
}

var olgaCar=new Car(4,"car");
var jarekCar=new Truck(18,2);
console.log(olgaCar.toString());
console.log(jarekCar.toString());