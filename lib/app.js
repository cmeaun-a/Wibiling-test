"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _shibes = _interopRequireDefault(require("./routers/shibes"));

var _cats = _interopRequireDefault(require("./routers/cats"));

var _birds = _interopRequireDefault(require("./routers/birds"));

var _animals = _interopRequireDefault(require("./routers/animals"));

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_express["default"]["static"]('public/dist'));
app.use(_shibes["default"]);
app.use(_birds["default"]);
app.use(_cats["default"]);
app.use(_animals["default"]);
app.get('/', function (req, res) {
  res.sendFile(_path["default"].resolve("".concat(__dirname, "/../index.html")));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});