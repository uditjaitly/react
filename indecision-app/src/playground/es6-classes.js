class Person {
    constructor(name="Anon", age=0){
        this.name=name;
        this.age=age;
    }

    getGreeting(){
        //return "hi" + this.name;
        return `Hi, I am ${this.name} and I am ${this.age} years old !`;
    }
};

class Traveller extends Person{
    constructor(name,age,home){
        super(name,age);
        this.home=home;
    }
    hasHome(){
        return !!this.home;
    }
    getGreeting(){
        let sentence=super.getGreeting();
        if(this.hasHome)
            return sentence+=` I am from ${this.home}`
    }
}

const me=new Traveller("Udit Jaitly",24, "Delhi");
console.log(me.getGreeting());
const me2=new Person()

console.log(me);
console.log(me2)