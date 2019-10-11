"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable no-restricted-globals */

/* eslint-disable radix */
var verifParams = function verifParams(req) {
  var _req$query = req.query,
      protocol = _req$query.protocol,
      count = _req$query.count,
      url = _req$query.url;
  var errors = [];
  if (protocol !== 'http' && protocol !== 'https') errors.push({
    param: 'protocol',
    message: 'Can only accept http or https'
  });
  if (count && (count > 30 || count < 1) || isNaN(parseInt(count))) errors.push({
    param: 'count',
    message: 'Must be a number, min 1, max 30'
  });
  if (url && url !== 'true' && url !== 'false') errors.push({
    param: 'url',
    message: 'Must be true or false'
  });
  if (errors.length) throw new Error(JSON.stringify(errors));
};

var _default = verifParams;
exports["default"] = _default;