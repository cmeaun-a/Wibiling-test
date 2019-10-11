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
router.get('/cats', (0, _asyncHandler["default"])(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var _req$query, protocol, count, url, _ref2, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _verifParams["default"])(req);
            _req$query = req.query, protocol = _req$query.protocol, count = _req$query.count, url = _req$query.url;
            _context.next = 4;
            return _axios["default"].get('http://shibe.online/api/cats', {
              params: {
                httpsUrls: protocol === 'https',
                count: count || 1,
                urls: url || true
              }
            });

          case 4:
            _ref2 = _context.sent;
            data = _ref2.data;
            res.json({
              type: 'success',
              code: 200,
              total: data.length,
              data: {
                cats: data.map(function (cat) {
                  return url === 'true' ? {
                    url: cat
                  } : {
                    id: cat
                  };
                })
              }
            });

          case 7:
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