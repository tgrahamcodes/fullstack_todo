// src/store/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// --- Define the type for a todo item
export interface Todo {
  id: number
  text: string
}

// --- Define the type for this slice's state
interface TodoState {
  items: Todo[]
}

// --- Initial state
const initialState: TodoState = {
  items: [],
}

// --- Create the slice
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Accepts a payload of type Todo
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload)
    },
    // Optional: remove a todo by id
    removeTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(todo => todo.id !== action.payload)
    },
  },
})

// --- Export action creators and the reducer
export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer