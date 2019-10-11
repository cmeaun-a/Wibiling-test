/* eslint-disable no-undef */
import verifParams from './verifParams'

describe('verifParams', () => {
  it('Should get protocol error', () => {
    try {
      verifParams({ query: {} })
    } catch (err) {
      expect(JSON.parse(err.message).length).toBe(1)
      expect(JSON.parse(err.message)[0].param).toBe('protocol')
    }
  })
  it('Should get count error', () => {
    try {
      verifParams({ query: { protocol: 'http', count: 33 } })
    } catch (err) {
      expect(JSON.parse(err.message).length).toBe(1)
      expect(JSON.parse(err.message)[0].param).toBe('count')
    }
  })
  it('Should get protocol error', () => {
    try {
      verifParams({ query: { protocol: 'http', url: 'lala' } })
    } catch (err) {
      expect(JSON.parse(err.message).length).toBe(1)
      expect(JSON.parse(err.message)[0].param).toBe('url')
    }
  })
  it('Should get protocol and url error', () => {
    try {
      verifParams({ query: { protocol: 'hh', url: 'lala' } })
    } catch (err) {
      expect(JSON.parse(err.message).length).toBe(2)
      expect(JSON.parse(err.message)[0].param).toBe('protocol')
      expect(JSON.parse(err.message)[1].param).toBe('url')
    }
  })
  it('Should get protocol, count and url error', () => {
    try {
      verifParams({ query: { protocol: 'hh', url: 'lala', count: 33 } })
    } catch (err) {
      expect(JSON.parse(err.message).length).toBe(3)
    }
  })
})
