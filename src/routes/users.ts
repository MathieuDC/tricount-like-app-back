import express, { Request, Response } from "express";
import User from "../models/User";
const controller = require('./../controllers/users')

var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req: Request, res: Response) {
  const id = req.params.id; 
  controller.get(id).then((user: User) => {
    res.send(JSON.stringify(user));
  })
});

router.post('/', function(req: Request, res: Response) {
  const user = req.body;
  console.log(user);
  
  
  res.type('json');
  res.json(user);
});


module.exports = router;
