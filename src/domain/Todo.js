export const Todo = class {
  id // 숫자, 자동 생성
  title // 문자열, 필수값
  description // 문자열, 필수 값,
  tags // 배열, 옵션 ex) ["prography", "nodejs"]
  isCompleted // 참불, 초깃값: false
  createdAt // 날짜, 생성시 자동 생성
  updatedAt // 날짜, 생성시 자동 생성, 수정시 자동 갱신,
}