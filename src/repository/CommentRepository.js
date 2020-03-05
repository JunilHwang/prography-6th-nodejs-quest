export const commentRepository = new class {
  commentList
  lastId

  constructor () {
    this.commentList = []
    this.lastId = 1
  }

  findAll (todoId) {
    const commentListOfTodo = this.commentList[todoId] || []
    return commentListOfTodo
  }

  find (todoId, commentId) {
    const commentListOfTodo = this.commentList[todoId] || []
    return commentListOfTodo.find(({ id }) => id === ~~commentId )
  }

  save (todoId, comment) {
    this.commentList[todoId] = this.commentList[todoId] || []
    const index = this.commentList[todoId].findIndex(v => v === comment)
    if (index === -1) {
      comment.setId(this.lastId)
      this.commentList[todoId].push(comment)
      this.lastId += 1
    } else {
      this.commentList[todoId][index] = comment
    }
  }

  remove (todoId, comment) {
    this.commentList[todoId].filter(v => v !== comment)
  }

}()