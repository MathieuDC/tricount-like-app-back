"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller = require('./../controllers/users');
var router = express_1.default.Router();
/* GET users listing. */
router.get('/', function (req, res) {
    controller.getAll().then((users) => {
        res.send(JSON.stringify(users));
    });
});
/* GET specific user. */
router.get('/:id', function (req, res) {
    const id = req.params.id;
    controller.get(id).then((user) => {
        res.json(user);
    });
});
router.post('/', function (req, res) {
    const user = req.body;
    controller.post(user).then((newUser) => {
        res.type('json');
        res.json(user);
    });
});
module.exports = router;
