'use client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { addTodo, removeTodo } from '../store/todoSlice'
import { Todo } from '@/store/todoSlice'
import './globals.css'

export default function Page() {
  const todos = useSelector((state: RootState) => state.todos.items)
  const dispatch = useDispatch<AppDispatch>()

  const handleAddTodo = () => {
    dispatch(addTodo({ id: Date.now(), text: 'New Todo' }))
  }

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id))
  }

  return (
    <main style={{ padding: 20 }}>
      <div className="bg-blue-500 text-white p-6 rounded-xl">
        If you see blue, Tailwind is working in the App Router!
      </div>
      <h1>Todo List</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={() => handleRemoveTodo(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}