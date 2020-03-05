import express from 'express'
import { Todo, Comment } from './entity'
import { commentRepository, todoRepository } from './repository'

const app = express();

app.use(express.json())

app.use('/hello-world', (req, res) => {
  res.send('hello world');
})

//할일 등록
app.post('/todos', ({ body }, res) => {
  const todos = new Todo(body)
  todoRepository.save(todos)
  res.send(todos)
})

//할일 목록
app.get('/todos', (req, res) => {
  res.send(todoRepository.findAll())
})

//할일 읽기
app.get('/todos/:todoId', ({ params }, res) => {
  const { todoId } = params
  res.send(todoRepository.find(todoId))
})

//할일 수정
app.put('/todos/:todoId', ({ params, body }, res) => {
  const { todoId } = params
  const todos = todoRepository.find(todoId)
  todos.put(body)
  todoRepository.save(todos)
  res.send(todos)
})

//할일 완료
app.put('/todos/:todoId/complete', ({ params }, res) => {
  const { todoId } = params
  const todos = todoRepository.find(todoId)
  todos.complete()
  todoRepository.save(todos)
  res.send({ msg: 'success' })
})

//할일 삭제
app.delete('/todos/:todoId', ({ params }, res) => {
  const { todoId } = params
  const todos = todoRepository.find(todoId)
  todoRepository.remove(todos)
  res.send({ msg: 'success' })
})

//할일에 댓글 등록
app.post('/todos/:todoId/comments', ({ params, body }, res) => {
  const { todoId } = params
  const comment = new Comment(body)
  commentRepository.save(todoId, comment)
  res.send(comment)
})

//할일의 댓글 목록
app.get('/todos/:todoId/comments', ({ params }, res) => {
  const { todoId } = params
  res.send(commentRepository.findAll(todoId))
})

//할일의 댓글 읽기
app.get('/todos/:todoId/comments/:commentId', ({ params }, res) => {
  const { todoId, commentId } = params
  res.send(commentRepository.find(todoId, commentId))
})

//할일의 댓글 수정
app.put('/todos/:todoId/comments/:commentId', ({ params, body }, res) => {
  const { todoId, commentId } = params
  const comment = commentRepository.find(todoId, commentId)
  comment.put(body)
  commentRepository.save(todoId, comment)
  res.send(comment)
})

//할일의 댓글 삭제
app.delete('/todos/:todoId/comments/:commentId', ({ params }, res) => {
  const { todoId, commentId } = params
  const comment = commentRepository.find(todoId, commentId)
  commentRepository.remove(todoId, comment)
  res.send({ msg: 'success' })
})


export default app;
