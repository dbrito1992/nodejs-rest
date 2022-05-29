"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const routes = new (0, _express.Router)();

// Não deve existir em um projeto!
// routes.get('/:id', UserController.show);
// routes.get('/', UserController.index);

routes.post('/', _UserController2.default.store);
routes.put('/', _loginRequired2.default, _UserController2.default.update);
routes.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = routes;
