{


    type Todo = {
        id: number;
        UserId: number;
        title: string;
        completed: boolean;
    }

    const getToDo = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        const data = await response.json()
        // console.log(data)
        return data


    }
    getToDo();































}