{
    // conditional type

    type b1 = number;
    type a1 = undefined;

    type x = a1 extends null ? true : false   //conditional type

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;



    type Sheikh = {
        bike: string;
        car: string;
        ship: string
    }

    // chech car, bike, ship, tractor

    // type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;

    // keyof sheikh

    type CheckVehicle<T> = T extends Sheikh ? true : false;

    type HasBike = CheckVehicle<"ship">

























}