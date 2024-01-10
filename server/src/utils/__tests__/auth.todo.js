import {isPasswordAllowed, userToJSON} from '../auth'

test('isPasswordAllowed only allows some passwords', () => {
  expect(isPasswordAllowed('')).toBe(false)
  expect(isPasswordAllowed('8888888888888')).toBe(false)
  expect(isPasswordAllowed('abec1231')).toBe(true)
})

// eslint-disable-next-line jest/prefer-todo
test('userToJSON excludes secure properties', () => {
  const user = {
    id: 'some-id',
    username: 'sarah',
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }

  test.todo('returns')
  const testUser = userToJSON(user)
  console.log(testUser)
  expect(testUser).toEqual({id: 'some-id', username: 'sarah'})
})

test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
