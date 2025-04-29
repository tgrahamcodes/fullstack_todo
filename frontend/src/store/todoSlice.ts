import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  loading: boolean;
}

const initialState: TodosState = { todos: [], loading: false };

export const fetchTodos = createAsyncThunk<Todo[]>('todos/fetchTodos', async () => {
  const res = await fetch('http://localhost:4000/api/todos');
  return await res.json();
});

export const addTodo = createAsyncThunk<Todo, string>('todos/addTodo', async (text) => {
  const res = await fetch('http://localhost:4000/api/todos', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  return await res.json();
});

export const toggleTodo = createAsyncThunk<Todo, number>('todos/toggleTodo', async (id, thunkAPI) => {
  // Find the current state of the todo
  const state = (thunkAPI.getState() as { todos: TodosState }).todos;
  const todo = state.todos.find(t => t.id === id);
  const res = await fetch(`http://localhost:4000/api/todos/${id}`, {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: todo ? !todo.completed : true }),
  });
  return await res.json();
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, (state) => { state.loading = true; })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.todos = action.payload; state.loading = false;
      })
      .addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        const idx = state.todos.findIndex(t => t.id === action.payload.id);
        if (idx !== -1) state.todos[idx] = action.payload;
      });
  }
});

export default todoSlice.reducer;