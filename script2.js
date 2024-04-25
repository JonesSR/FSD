3) Write a “person” class to hold all the details.

class Person{
    constructor(name,age,dob,address,email){
        this.name = name;
        this.age = age;
        this.dob = dob ;
        this.address = address ;
        this.email = email ;
    }
    get_name(){
    return this.name;
    }
    get_age(){
        return this.age;
    }
    get_dob(){
        return this.dob;
    }
    get_address(){
        return this.address;
    }
    get_email(){
        return this.email;
    }

}
var p1 = new Person("jones",31,1991,"voc nagar","Jones@outlook.com");
console.log(p1);



4) Calculating Uber Price
class Uber{
    constructor(km){
        console.log("One km = 25 rupees")
        this.km= km*25;
    }
    get_km(){
    return this.km;
    }

}
var U1 = new Uber(23);
var ans = U1.get_km()
console.log("your total cost on uber is",ans,"rupees");


