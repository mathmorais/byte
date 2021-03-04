import { tokenSign } from '../utils/tokenSign'

describe('JsonWebToken generation test', () => {
  it('Should return a token when called', () => {
    const payload = {
      testKey: 'testString',
    }

    expect(tokenSign(payload)).toBeTruthy()
  })
})
