{
    // constraints

    // function
    const addCourseToStudent = <T extends { id: number, name: string, email: string }>(student: T) => {
        const course = 'Next level Development'
        return {
            ...student,
            course
        }
    }


    const student3 = addCourseToStudent({ id: 4, name: 'Z', email: 'z@gmail.com', emni: 'emni' })
    const student1 = addCourseToStudent({ id: 1, name: 'X', email: 'x@gmail.com', developer: 'NLD' })
    const student2 = addCourseToStudent({ id: 2, name: 'Y', email: 'y@gmail.com', hasWatch: 'Imlab' })
























}