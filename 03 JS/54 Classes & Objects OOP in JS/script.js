// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; //sets rabbit. [[Prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log("object ....");
    }
    eats() {
        console.log("Eating");
    }

    jumps() {
        console.log("Jumping");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("object is lion....");
    }

}

let a = new Animal("Bunny");
console.log(a);

let l = new Animal("Shera");
console.log(l);