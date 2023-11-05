{
    // promise
    // simulate

    type Something = { something: string }
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: 'somethings' }
            if (data) {
                resolve(data)
            }
            else {
                reject('failed to load data')
            }
        })
    }


    // calling create promise function

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise()
        // console.log(data)
        return data;
    }
    showData();


























}