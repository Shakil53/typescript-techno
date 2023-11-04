//Array
// Array of String
let friend: string[] = ['shakil', 'rachel']
friend.push()

const frnd1: string[] = ['Jahid', 'Akash']
friend.push('')

// Array of Number
let eligibleRollList: number[] = [1, 3]

// Array of Object
const user: {
    firstName: string,
    midleName: string,
    lastName: string,
    isMarried: boolean
} = {
    firstName: 'shakil',
    midleName: 'Quader',
    lastName: 'Ahmed',
    isMarried: false
}

// ------------------------------------------------------------------------

//Funtion
//normal function
//arrow function

function add(num1: number, num2: number) {
    return num1 + num2;
}
add(2, 15)
{
    // --------------------------------------------------------------------
    //object => function === method
    // when we use a function into object that will be called a method

    const poorUser = {
        name: 'shakil',
        balance: 0,
        addBalance: (balance: number): string => {
            return `My new balance is : ${this.balance + balance}`
        }
        ,
    }

    // call back function--------
    const arr: number[] = [1, 4, 10]

    const newArray: number[] = arr.map((elem: number) => elem * elem)

}
const richUser = {
    name: 'shanto',
    balance: 0,
    addBalance: () => {
        return this.balance + balance
    }
}


const arr1: number[] = [1, 50, 2]
const arr1Arrow: number[] = arr1.map((elem1: number) => elem1 * elem1)

// -----------------------------------------------------------------------

//spread Operator
const frndList1: string[] = ['Mafi', 'Nahid', 'Shafi']
const frndList2: string[] = ['Mirza', 'Abbas', 'Chowdhuri']
frndList1.push(...frndList2)


//object => Operator
const mentors = {
    typescript: 'Mezba',
    redux: 'Miz',
    dbms: 'Mizan'
}

const mentors2 = {
    prizma: 'Firoz',
    next: 'Tonmoy',
    cloud: 'Nahid'

}


const mentorList = {
    ...mentors,
    ...mentors2
}

// ------------------------------------------------------------------------

//learn rest operator
{
    const greetFrnds = (frnd1: string, frnd2: string, frnd3: string) => {
        console.log(`Hi ${frnd1} ${frnd2} ${frnd3}`)
    }
    greetFrnds('Abul', 'Kabul', 'babul', 'ubul',)
}

//in this section we can added unlimited array of element using spread Operators
const greetFrnds = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`))

}
greetFrnds('Abul', 'Kabul', 'babul', 'ubul')

// ------------------------------------------------------------------------
{
    //Destructing
    const user = {
        id: 343,
        name: {
            firstName: 'Shakil',
            middleName: 'MD',
            lastName: 'Ahmed'
        },
        contactNo: '0938248',
        address: 'Sirajgonj'
    }

    const { contactNo, name: { middleName } } = user;

}
// --------------------------------------------------------------------------
{
    //Array Destructing
    const myFrnds = ['chadler', 'joey', 'ross', 'rachel', 'monica']
    const [, , bestfrnd, ...rest] = myFrnds
    //here bestfrnd will be ross and ...rest will store value 'rachel', 'monica'
    //0, 1, bestfrnd(2), rest(3, 4) --- indexing 
}
// --------------------------------------------------------------------------
{
    //type Alise( custom type Name once we declare and allow to use rapidly)

    type Student = {
        name: string,
        age: number,
        gender: string,
        contactNo?: string,
        address: string
    }
    const student1: Student = {
        name: 'Shakil',
        age: 25,
        gender: 'male',
        contactNo: '0175555555',
        address: 'Dhaka'
    };

    const student2: Student = {
        name: 'Mir',
        age: 40,
        gender: 'male',
        address: 'ctg'
    }
    const student3: Student = {
        name: 'Lota',
        age: 60,
        gender: 'female',
        address: 'sir'
    }


    //type for string
    type UserName = string;

    type isAdmin = boolean;

    const user1: UserName = 'Person name'
    const admin: isAdmin = true



    //Type Alise for Function
    type Add = (num1: number, num2: number) => number;

    // const add = (num1: number, num2: number) => num1 + num2  --- We will do with the help of type Alise

    const add: Add = (num1, num2) => num1 + num2


}

// -------------------------------------------------------------------------
{
    //union types

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper' //String Literal Type
    type FullStackDeveloper = 'frontEndDeveloper' | 'expertDeveloper' //String Literal Type


    type Developer = FrontendDeveloper | FullStackDeveloper


    const newDeveloper: FrontendDeveloper = 'fakibazDeveloper'

    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female'
        bloodGroup: '0+' | 'B+' | 'Ab+'
    }

    const user1: User = {
        name: 'personName',
        gender: 'male',
        bloodGroup: 'Ab+'
    }



}
// ------------------------------------------------------------------------

{

    //intersection type (common type)

    type FrontendDeveloper = {
        skills: string[],
        designation1: 'Frontend Developer'
    }
    type BackEndDeveloper = {
        skills: string[],
        designation2: 'Backend Developer'
    }

    type FullStackDeveloper = FrontendDeveloper & BackEndDeveloper

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ["HTML", "CSS", "NODE JS", "EXPRESS"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"



    }


}
// --------------------------------------------------------------------
{

    //Question Mark

    //Ternary Operator || Optional Chaining || nullish Coalescing operator

    const age: number = 18;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult')
    }

    const isAdult = age <= 20 ? "adult" : "not adult";
    console.log({ isAdult })


}
// --------------------------------------------------------------------
{


    //nulish coalesing operatior
    //null or undefine decision making 

    const isAuthticated = undefined;
    const result = isAuthticated ?? 'Guest'
    console.log({ result })




    type User1 = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User1 = {
        name: 'shakil',
        address: {
            city: 'sir',
            road: 'Awesome Road',
            presentAddress: "Dhaka"
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address';
    console.log({ permanentAddress })



}
// --------------------------------------------------------------------

{

    // nullable type
    const searchName = (value: string | null) => {
        if (value) {
            console.log('308- searching')
        }
        else {
            console.log('There is nothing to search')
        }
    }
    searchName(null)
}
// ------------------------------------------------
{
    // unknown type
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if
            (typeof value === 'string') {
            const [speed, unit] = value.split(' ')
            console.log(speed)
            const convertedSpeed = (parseFloat(speed) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log('wrong Input')
        }

    }

    getSpeedInMeterPerSecond(null)
}

// ------------------------------------
// never type
const throwError = (msg: string): never => {
    throw new Error(msg)
}
throwError('kopal amr pora')























