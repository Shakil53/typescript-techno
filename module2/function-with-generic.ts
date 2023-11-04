{

    // function with generic
    const createArray = (param: string): string[] => {
        return [param]

    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }
    const result1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')


    type User = { id: number, name: string }
    const resGenericObj = createArrayWithGeneric<User>({ id: 222, name: 'Mr Pashan' })





    {


        // Tuple-------------

        const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
            return [param1, param2]
        }
        const result1 = createArrayWithTuple<string, number>('Bangla', 222)
        const resGeneric = createArrayWithTuple<string, { name: string }>('Bangladesh', {
            name: 'Asia'
        })

        // function
        const addCourseToStudent = <T>(student: T) => {
            const course = 'Next level Development'
            return {
                ...student,
                course
            }
        }



        const student1 = addCourseToStudent({ name: 'X', email: 'x@gmail.com', developer: 'NLD' })
        const student2 = addCourseToStudent({ name: 'Y', email: 'y@gmail.com', hasWatch: 'Imlab' })

    }






















}