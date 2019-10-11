"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _verifParams = _interopRequireDefault(require("./verifParams"));

/* eslint-disable no-undef */
describe('verifParams', function () {
  it('Should get protocol error', function () {
    try {
      (0, _verifParams["default"])({
        query: {}
      });
    } catch (err) {
      expect(JSON.parse(err.message).length).toBe(1);
      expect(JSON.parse(err.message)[0].param).toBe('protocol');
    }
  });
  it('Should get count error', function () {
    try {
      (0, _verifParams["default"])({
        query: {
          protocol: 'http',
          count: 33
        }
      });
    } catch (err) {
      expect(JSON.parse(err.message).length).toBe(1);
      expect(JSON.parse(err.message)[0].param).toBe('count');
    }
  });
  it('Should get protocol error', function () {
    try {
      (0, _verifParams["default"])({
        query: {
          protocol: 'http',
          url: 'lala'
        }
      });
    } catch (err) {
      expect(JSON.parse(err.message).length).toBe(1);
      expect(JSON.parse(err.message)[0].param).toBe('url');
    }
  });
  it('Should get protocol and url error', function () {
    try {
      (0, _verifParams["default"])({
        query: {
          protocol: 'hh',
          url: 'lala'
        }
      });
    } catch (err) {
      expect(JSON.parse(err.message).length).toBe(2);
      expect(JSON.parse(err.message)[0].param).toBe('protocol');
      expect(JSON.parse(err.message)[1].param).toBe('url');
    }
  });
  it('Should get protocol, count and url error', function () {
    try {
      (0, _verifParams["default"])({
        query: {
          protocol: 'hh',
          url: 'lala',
          count: 33
        }
      });
    } catch (err) {
      expect(JSON.parse(err.message).length).toBe(3);
    }
  });
});