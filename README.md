# Prography 6th NodeJS Quest

> NodeJS 전형의 점수는 **면접(70%), 과제(30%)** 입니다. 과제의 미완성이 합격에 큰 영향을 주지 않습니다.

## 개요

이 과제는 프로그라피 활동에 필요한 기초적인 개발 능력을 측정합니다. API 구현 과제로 할일을 기록 관리할 수 있는 서버 어플리케이션을 만듭니다. 전체 API 목록 중 **정상 작동하는 API의 갯수를 세는 방식** 으로 채점합니다. 채점에는 e2e 테스트를 진행할 예정이며, 테스트 라이브러리로는 [jest](https://jestjs.io/)와 [supertest](https://github.com/visionmedia/supertest)가 사용될 예정입니다.

과제 수행에는 테스트 수행을 위해 [express 라이브러리](https://www.npmjs.com/package/express)를 사용하는 것을 권장합니다. 이외에 다른 라이브러리를 사용하셔도 불이익은 전혀없습니다. 데이터베이스의 선택은 완전 자유입니다. ORM을 써도 됩니다.

## 과제

할일을 만들고 관리를 할 수 있는 Restful API 서버를 구현해주시기 바랍니다.
이 프로그램은 다음과 같은 기능이 있습니다.

- 할일이 있다.
- 할일은 다음의 필드를 가지고 있다.
  - 식별아이디(id) - 자동생성
  - 제목(title)
  - 설명(description)
  - 태그목록(tags)
  - 완료 여부(isCompleted) - 초깃값: false
  - 생성일(createdAt) - 자동생성
  - 수정일(updatedAt) - 자동생성
- 할일을 등록/수정/삭제 할 수 있다.
- 할일을 완료 표시를 할 수 있다.
- 할일에 태그를 삽입할 수 있다.
- 할일을 태그로 모아서 볼 수 있다.
- 할일을 생성된 순서로 정렬할 수 있다.
- 할일을 제목 또는 설명의 내용의 일부분으로 검색할 수 있다.
- 할일에 코멘트(댓글)을 등록/수정/삭제 할 수 있다.
- 코멘트는 다음의 필드를 가지고 있다.
  - 식별아이디(id) - 자동생성
  - 내용(contents)
  - 생성일(createdAt) - 자동생성
  - 수정일(updatedAt) - 자동생성

이 서버에서 요구하는 기본 API는 총 10개입니다.

1. 할일 등록: `POST /todos`
2. 할일 목록: `GET /todos`
3. 할일 읽기: `GET /todos/:todoId`
4. 할일 수정: `PUT /todos/:todoId`
5. 할일 완료: `PUT /todos/:todoId/complete`
6. 할일 삭제: `DELETE /todos/:todoId`
7. 댓글 등록: `POST /todos/:todoId/comments`
8. 댓글 목록: `GET /todos/:todoId/comments`
9. 댓글 수정: `PUT /todos/:todoId/comments/:commentId`
10. 댓글 삭제: `DELETE /todos/:todoId/comments/:commentId`

각 API는 다음의 응답 특징을 가집니다.

- 목록(GET) 기능은 배열형식으로 응답됩니다.
- 읽기(GET) 기능은 내용 필드들이 object 형태로 응답됩니다.
- 등록(POST) 기능은 클라이언트가 보낸 값에 자동으로 생성된 필드가 함께 응답됩니다.
- 수정(PUT) 기능은 클라이언트가 보낸 값으로 갱신이 된 내용이 응답됩니다.
- 삭제(DELETE) 기능은 `{"msg": "success"}` 가 응답됩니다.

***

추가 기능(시간이 되면 진행해주세요)

1. 할일 정렬: `GET /todos?order[createdAt]=desc`
2. 할일 검색1: `GET /todos?title=%과제%`
3. 할일 검색2: `GET /todos?description=%프로그라피%`
4. 할일 검색3: `GET /todos?tags[]=prography&tags[]=nodejs`

> **Tip**: 위의 URL쿼리에 들어가는 (`?order[createdAt]=desc`) 같은 부분은 [qs 라이브러리](https://www.npmjs.com/package/qs)를 사용하시면 쉽게 구현이 가능합니다.

***

### 점수항목

- 정상적인 작동(e2e 테스트 수행)

### 가산점 항목

- validation 처리, 빈값은 허용 안함
- Typescript 사용
- 브랜치전략을 나누어서 개발

### 제출방법

지원자의 Github 에 `prography-6th-nodejs-quest`라는 이름을 가진 public 레포지토리를 생성하고, 코드를 올립니다.

***

#### [부록] 채점 방법

각 API들에 대하여 e2e 테스트를 진행합니다.

다음의 예시로 설명합니다.

`할일 등록`의 경우에는 다음과 같은 예시 payload를 전달하고, 응답이 일치하고, 생성된 컬럼(id, createdAt, updatedAt)이 포함되어 돌아오는지 확인합니다.

```javascript
  describe('test feature/todos', () => {
    test('create todo', async () => {
      const todoId = 1;
      const payload = {
        title: '프로그라피 과제하기',
        description: '프로그라피 사전과제를 시간내에 제출해야한다.',
        tags: ['prography', 'nodejs']
      }
      const res = await supertest(app)
        .post(`/todos/${todoId}`)
        .send(payload);
      expect(res.status).toEqual(200);
      expect(res.body.data).toMatchObject(payload);
      expect(res.body.createdAt).not().toBeUndefined();
      expect(res.body.updatedAt).not().toBeUndefined();
      expect(res.body.id).not().toBeUndefined();
    })
  })
```

`할일 수정`의 경우에는 다음과 같은 예시 payload를 전달하고, 응답이 변경된 내용과 일치하는지, 확인합니다. 수정 전과 수정 후의 updatedAt의 데이터가 변경되었는지도 같이 확인합니다.

```javascript
  describe('test for feature/todos', () => {
    test('update todo', async () => {
      const instance = supertest(app);
      const payload = {
        title: '프로그라피 과제하기를 수정하기',
        description: '프로그라피 사전과제를 시간내에 수정해서 제출해야한다.',
        tags: ['prography', 'modify']
      }
      const before = await instance.get(`/todos/${todoId}`);
      const after = await instance.put(`/todos/${todoId}`)
        .send(payload);
      expect(after.status).toEqual(200);
      expect(after.body.title).toBe(payload.title);
      expect(after.body.description).toBe(payload.description);
      expect(after.body.tags).toBe(payload.tags);
      expect(after.body.updatedAt).not().toBe(before.body.updatedAt);
    })
  })
```

`할일 삭제`의 경우에는 응답이 `{"msg": "success"}` 가 포함되는지 확인합니다.

```javascript
  describe('test for feature/todos', () => {
    test('delete todo', async () => {
      const todoId = 1;
      const res = await supertest(app)
        .delete(`/todos/${todoId}`);
      expect(res.status).toEqual(200);
      expect(res.body.msg).toEqual('success');
    })
  })
```