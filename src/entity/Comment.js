let lastId = 1

export const Comment = class  {
  id // 숫자, 자동 생성
  contents // 문자열, 필수값
  createdAt // 날짜, 생성시 자동 생성
  updatedAt // 날짜, 생성시 자동 생성, 수정시 자동 갱신,

  constructor ({ contents }) {
    this.id = 0
    this.contents = contents
    this.createdAt = Date.now()
    this.updatedAt = Date.now()
  }

  setId (id) {
    this.id = id
  }

  put ({ contents }) {
    this.contents = contents
    this.updatedAt = Date.now()
  }
}