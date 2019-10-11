"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var asyncHandler = function asyncHandler(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next))["catch"](function (err) {
      console.error("Error: ".concat(err.message));
      res.status(400).json({
        type: 'badRequest',
        code: 400,
        errors: JSON.parse(err.message)
      });
    });
  };
};

var _default = asyncHandler;
exports["default"] = _default;