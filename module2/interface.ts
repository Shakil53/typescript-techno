{
    //  Interface


    // Object type

    // Type Alice
    type User1 = {
        name: string;
        age: number;

    }
    // premitive type we have must use type Alice
    type RollNo = number;


    // Interface is not for premitive value; we can use it mostly in object for declared a type
    interface User2 {
        name: string;
        age: number;
    }

    const user1: User2 = {
        name: 'shakil',
        age: 100
    }


    // union type using Type Alice
    type UserWithRole1 = User1 & { roll: string }

    const userWithExtraFeature: UserWithRole1 = {
        name: 'Person',
        age: 200,
        roll: "fifty"
    }


    // union type using interface
    interface UserWithRole2 extends User2 {
        roll: string;
    }
    // array type using Alice and Interface
    type Roll1 = number[];
    const rollNo1: Roll1 = [1, 3, 23]

    //array type using Interface
    interface Roll2 {
        arr: number
    }


    // function
    type Add = (num1: number, num2: number) => number
    const add: Add = (num1, num2) => num1 + num2














}