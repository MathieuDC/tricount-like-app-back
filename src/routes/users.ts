import express, { Request, Response } from "express";
import User from "../models/User";
const controller = require('./../controllers/users')

var router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response) { 
  controller.getAll().then((users: any) => {
    res.send(JSON.stringify(users));
  })
});

/* GET specific user. */
router.get('/:id', function(req: Request, res: Response) {
  const id = req.params.id; 
  controller.get(id).then((user: User) => {
    res.json(user);
  })
});

/* POST a new user. */
router.post('/', function(req: Request, res: Response) {
  const user = req.body;
  controller.post(user).then((newUser: User) => {
    res.type('json');
    res.json(newUser);
  })
});


module.exports = router;
