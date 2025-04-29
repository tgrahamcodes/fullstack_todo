import express, { Request, Response } from 'express';
import cors from 'cors';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const app = express();
app.use(cors());
app.use(express.json());

let todos: Todo[] = [{ id: 1, text: 'Learn Redux', completed: false }];

app.get('/api/todos', (_req: Request, res: Response) => res.json(todos));

app.post('/api/todos', (req: Request, res: Response) => {
  const { text } = req.body;
  const newTodo: Todo = { id: Date.now(), text, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.patch('/api/todos/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;
  const todo = todos.find(t => t.id == Number(id));
  if (todo) todo.completed = completed;
  res.json(todo || {});
});

app.listen(4000, () => console.log("API listening on http://localhost:4000"));