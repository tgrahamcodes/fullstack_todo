// app/page.tsx
'use client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { addTodo } from '../store/todoSlice'

export default function Page() {
  const todos = useSelector((state: RootState) => state.todos.items) // adjust according to your slice
  const dispatch = useDispatch<AppDispatch>()

  const handleAddTodo = () => {
    dispatch(addTodo({ id: Date.now(), text: 'New Todo' }))
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Todo List</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </main>
  )
}