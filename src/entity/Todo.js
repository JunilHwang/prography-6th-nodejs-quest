let lastId = 1

export const Todo = class {

  id // 숫자, 자동 생성
  title // 문자열, 필수값
  description // 문자열, 필수 값,
  tags // 배열, 옵션 ex) ["prography", "nodejs"]
  isCompleted // 참불, 초깃값: false
  createdAt // 날짜, 생성시 자동 생성
  updatedAt // 날짜, 생성시 자동 생성, 수정시 자동 갱신,

  constructor ({ title, description, tags }) {
    this.id = lastId++
    this.title = title
    this.description = description
    this.tags = tags
    this.isCompleted = false
    this.createdAt = Date.now()
    this.updatedAt = Date.now()
  }

  put ({ title, description, tags }) {
    if (title !== undefined) this.title = title
    if (description !== undefined) this.description = description
    if (tags !== undefined) this.tags = tags
    this.updatedAt = Date.now()
  }

  complete () {
    this.isCompleted = true
    this.updatedAt = Date.now()
  }
}