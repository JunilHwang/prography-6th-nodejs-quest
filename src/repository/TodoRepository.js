export const todoRepository = new class {
  lastId
  todoList

  constructor() {
    this.lastId = 1
    this.todoList = []
  }

  findAll () {
    return this.todoList
  }

  find (todoId) {
    return this.todoList.find(({ id }) => id === ~~todoId )
  }

  save (todos) {
    const index = this.todoList.findIndex(v => v === todos)
    if (index === -1) {
      todos.setId(this.lastId)
      this.todoList.push(todos)
      this.lastId += 1
    } else {
      this.todoList[index] = todos
    }
  }

  remove (todos) {
    this.todoList = this.todoList.filter(v => v !== todos)
  }

}()