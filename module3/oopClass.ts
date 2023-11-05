{
    // OOP class
    class Animal {
        // name: string;
        // specific: string;
        // sound: string;

        // Parameter

        constructor(public name: string, public specific: string, public sound: string) {
            // this.name = name;
            // this.specific = specific;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal('German Shepard Bhai', 'dog', 'Ghew Gheew')
    const cat = new Animal('shakil', 'cat', 'meaw meaw')


    cat.makeSound()


    {

        // Again
        class Person {
            constructor(public name: string, public age: number, public gender: string) { }
            makePerson() {
                console.log(`The new person name ${this.name} and he is ${this.age} years old. And gender ${this.gender}`)
            }

        }


    }

















}