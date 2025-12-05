import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello 1st todo",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",

  initialState,

  reducers: {

    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) =>
        todo.id !== action.payload ? true : false
      );
    },

  },

});


export const {addTodo,deleteTodo}  = todoSlice.actions
export default todoSlice.reducer