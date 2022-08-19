"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller = require('./../controllers/users');
var router = express_1.default.Router();
/* GET users listing. */
router.get('/:id', function (req, res) {
    const id = req.params.id;
    controller.get(id).then((user) => {
        res.send(JSON.stringify(user));
    });
});
router.post('/', function (req, res) {
    const user = req.body;
    console.log(user);
    controller.post(user);
    res.send('respond with a resource');
});
module.exports = router;
