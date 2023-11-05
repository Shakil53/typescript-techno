{
    // Utility

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: number;
    }

    // Pick type
    type NameAge = Pick<Person, 'name' | 'age'>

    // Omit type
    type ContactInfo = Omit<Person, "name" | 'age'>

    // Required
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // ReadOnly type
    type PersonReadOnly = Readonly<Person>
    const person1: PersonReadOnly = {
        name: 'Mr x',
        age: 233,
        contactNo: 284
    }
    person1.name = 'Mr. YZ'


    // record type
    // type MyObj = {
    //     a: string;
    //     b: string
    // }

    type MyObj = Record<string, string>
    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc'
    }



    // Specify that Person.name can only be accessed within the class, but that the method Person.getName()can be accessed anywhere:
    {
        class Person {
            private name: string;

            public constructor(name: string) {
                this.name = name;
            }

            public getName(): string {
                return this.name;
            }

        }
    }



    // define our tuple
    let ourTuple: [number, boolean, string];

    // initialize incorrectly throws an error
    ourTuple = [25, false, 'Coding God was mistaken'];

    console.log(ourTuple);
































}