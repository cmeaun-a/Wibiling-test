"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _supertest = _interopRequireDefault(require("supertest"));

var _birds = _interopRequireDefault(require("./birds"));

/* eslint-disable no-undef */
describe('Test birds router', function () {
  var app = (0, _express["default"])();
  app.use(_birds["default"]);
  it('should get 3 birds',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _supertest["default"])(app).get('/birds').query({
              protocol: 'http',
              count: 3
            }).expect(200);

          case 2:
            response = _context.sent;
            expect(response.body.data.birds.length).toBe(3);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should get protocol error',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _supertest["default"])(app).get('/birds').expect(400);

          case 2:
            response = _context2.sent;
            expect(response.body.errors[0].param).toBe('protocol');

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should get count error',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    var response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _supertest["default"])(app).get('/birds').query({
              protocol: 'http',
              count: 33
            }).expect(400);

          case 2:
            response = _context3.sent;
            expect(response.body.errors[0].param).toBe('count');

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should get url error',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4() {
    var response;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _supertest["default"])(app).get('/birds').query({
              protocol: 'http',
              count: 3,
              url: 'lala'
            }).expect(400);

          case 2:
            response = _context4.sent;
            expect(response.body.errors.length).toBe(1);
            expect(response.body.errors[0].param).toBe('url');

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('should get protocol and url error',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5() {
    var response;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _supertest["default"])(app).get('/birds').query({
              protocol: null,
              count: 3,
              url: 'lala'
            }).expect(400);

          case 2:
            response = _context5.sent;
            expect(response.body.errors.length).toBe(2);
            expect(response.body.errors[0].param).toBe('protocol');
            expect(response.body.errors[1].param).toBe('url');

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('should get protocol and count error',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6() {
    var response;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _supertest["default"])(app).get('/birds').query({
              protocol: null,
              count: 36,
              url: false
            }).expect(400);

          case 2:
            response = _context6.sent;
            expect(response.body.errors.length).toBe(2);
            expect(response.body.errors[0].param).toBe('protocol');
            expect(response.body.errors[1].param).toBe('count');

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('should get protocol, count and url error',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7() {
    var response;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _supertest["default"])(app).get('/birds').query({
              protocol: null,
              count: 37,
              url: 'lala'
            }).expect(400);

          case 2:
            response = _context7.sent;
            expect(response.body.errors.length).toBe(3);
            expect(response.body.errors[0].param).toBe('protocol');
            expect(response.body.errors[1].param).toBe('count');
            expect(response.body.errors[2].param).toBe('url');

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
});