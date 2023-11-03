{
    // type assertion

    let anything: any;
    anything = 'shakil';

    (anything as string)



    const kgTOGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const converterValue = parseFloat(value) * 1000;
            return `The converted value is : ${converterValue}`
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    }

    const result1 = kgTOGm(1000) as number;

    const result2 = kgTOGm('1000') as string


    // using custom error-------

    type CustomError = {
        message: string;
    }

    try {

    }
    catch (error) {
        console.log((error as CustomError).message)
    }

    // -------------------------------------------------------------
























}