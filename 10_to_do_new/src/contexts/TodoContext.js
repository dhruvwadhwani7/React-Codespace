import { createContext, useContext } from "react";

export  const TodoContext = createContext(
    {
        //default values 
        todos : [ 
            {
                id : 1,
                todo : "message of todo 1",
                completed : false
            }
        ],
        addTodo : (todo) => {},
        deleteTodo : (id) => {},
        updateTodo : (id,todo) => {},
        toggleComplete : (id) => {}
    }
)

export const TodoProvider = TodoContext.Provider


//custom hook 
export const useTodo = () => {
    return useContext(TodoContext)
}