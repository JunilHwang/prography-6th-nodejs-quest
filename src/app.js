import express from 'express';
import { Todo, Comment } from './entity';

let todoList = []
let commentList = []

const app = express();

app.use(express.json())

app.use('/hello-world', (req, res) => {
  res.send('hello world');
})

//할일 등록
app.post('/todos', ({ body }, res) => {
  const todos = new Todo(body)
  todoList.push(todos)
  res.send(todos)
})

//할일 목록
app.get('/todos', (req, res) => {
  res.send(todoList)
})

//할일 읽기
app.get('/todos/:todoId', ({ params }, res) => {
  res.send(
    todoList.find(({ id }) => id === ~~params.todoId)
  )
})

//할일 수정
app.put('/todos/:todoId', ({ params, body }, res) => {
  const todos = todoList.find(({ id }) => id === ~~params.todoId)
  todos.put(body)
  res.send(todos)
})

//할일 완료
app.put('/todos/:todoId/complete', ({ params }, res) => {
  const todos = todoList.find(({ id }) => id === ~~params.todoId)
  todos.complete()
  res.send({ msg: 'success' })
})

//할일 삭제
app.delete('/todos/:todoId', ({ params }, res) => {
  todoList = todoList.filter(({ id }) => id !== ~~params.todoId)
  res.send({ msg: 'success' })
})

//할일에 댓글 등록
app.post('/todos/:todoId/comments', ({ params, body }, res) => {

})

//할일의 댓글 목록
app.get('/todos/:todoId/comments', (req, res) => {

})

//할일의 댓글 읽기
app.get('/todos/:todoId/comments/:commentId', (req, res) => {

})

//할일의 댓글 수정
app.put('/todos/:todoId/comments/:commentId', (req, res) => {

})

//할일의 댓글 삭제
app.delete('/todos/:todoId/comments/:commentId', (req, res) => {

})


export default app;
