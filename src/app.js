import express from 'express';

const app = express();

app.use(express.json())

app.use('/hello-world', (req, res) => {
  res.send('hello world');
})

//할일 등록
app.post('/todos', (req, res) => {

})

//할일 목록
app.get('/todos', (req, res) => {

})

//할일 읽기
app.get('/todos/:todoId', (req, res) => {

})

//할일 수정
app.put('/todos/:todoId', (req, res) => {

})

//할일 완료
app.put('/todos/:todoId/complete', (req, res) => {

})

//할일 삭제
app.delete('/todos/:todoId', (req, res) => {

})

//할일에 댓글 등록
app.post('/todos/:todoId/comments', (req, res) => {

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
