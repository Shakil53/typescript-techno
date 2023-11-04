{
    // Generic type

    // dynamic
    // type GenericArray = Array<number>
    // type GenericArray<param> = Array<param>
    type GenericArray<T> = Array<T>


    // const rollNo: number[] = [3, 5, 2]
    // const rollNo: Array<number> = [3, 5, 2]
    const rollNo: GenericArray<number> = [3, 5, 2]

    // const mentors: string[] = ['Mrx', 'Mry', 'Mrz']
    // const mentors: Array<string> = ['Mrx', 'Mry', 'Mrz']
    const mentors: GenericArray<string> = ['Mrx', 'Mry', 'Mrz']

    // const boolean: boolean[] = [true, false, true]
    // const boolean: Array<boolean> = [true, false, true]
    const boolean: GenericArray<boolean> = [true, false, true]


    const add = (x: number, y: number) => x + y;
    add(30, 20)


    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: 'Shakil',
            age: 120
        },
        {
            name: 'Nitul',
            age: 1200
        }
    ]































}