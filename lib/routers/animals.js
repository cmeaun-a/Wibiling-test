"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _axios = _interopRequireDefault(require("axios"));

var _asyncHandler = _interopRequireDefault(require("../middlewares/asyncHandler"));

var _verifParams = _interopRequireDefault(require("../utils/verifParams"));

var router = new _express["default"].Router();
router.get('/animals', (0, _asyncHandler["default"])(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var _req$query, protocol, count, url, _ref2, shibes, _ref3, cats, _ref4, birds;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _verifParams["default"])(req);
            _req$query = req.query, protocol = _req$query.protocol, count = _req$query.count, url = _req$query.url;
            _context.next = 4;
            return _axios["default"].get('http://shibe.online/api/shibes', {
              params: {
                httpsUrls: protocol === 'https',
                count: count || 1,
                urls: url || true
              }
            });

          case 4:
            _ref2 = _context.sent;
            shibes = _ref2.data;
            _context.next = 8;
            return _axios["default"].get('http://shibe.online/api/cats', {
              params: {
                httpsUrls: protocol === 'https',
                count: count || 1,
                urls: url || true
              }
            });

          case 8:
            _ref3 = _context.sent;
            cats = _ref3.data;
            _context.next = 12;
            return _axios["default"].get('http://shibe.online/api/birds', {
              params: {
                httpsUrls: protocol === 'https',
                count: count || 1,
                urls: url || true
              }
            });

          case 12:
            _ref4 = _context.sent;
            birds = _ref4.data;
            res.json({
              type: 'success',
              code: 200,
              total: shibes.length + cats.length + birds.length,
              data: {
                shibes: shibes.map(function (shibe) {
                  return url === 'true' ? {
                    url: shibe
                  } : {
                    id: shibe
                  };
                }),
                cats: cats.map(function (cat) {
                  return url === 'true' ? {
                    url: cat
                  } : {
                    id: cat
                  };
                }),
                birds: birds.map(function (bird) {
                  return url === 'true' ? {
                    url: bird
                  } : {
                    id: bird
                  };
                })
              }
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));
var _default = router;
exports["default"] = _default;