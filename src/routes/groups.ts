import express, { Request, Response } from "express";
import CGroup from "../models/Group";
import User from "../models/User";

const controller = require('./../controllers/groups')

var router = express.Router();

/* GET groups listing. */
router.get('/', function(req: Request, res: Response) {
  try {
    controller.getAll().then((group: CGroup) => {
      res.type('json');
      res.send(JSON.stringify(group));
    })
  } catch (error) {
    console.log(error)
  }
});

/* POST a new group. */
router.post('/', function(req: Request, res: Response) {
  const group = req.body;
  controller.post(group).then((newGroup: CGroup) => {
    res.type('json');
    res.json(newGroup);
  })
});

/* POST a new user in a specific group. */
router.post('/:id', function(req: Request, res: Response) {
  const groupId = req.params.id; 
  const user = req.body;
  controller.postUser(groupId, user).then((group: CGroup) => {
    res.type('json');
    res.json(group);
  })
});

/* POST a new transaction in a specific group. */
router.post('/:groupId/transaction', function(req: Request, res: Response) {
  const groupId = req.params.groupId; 
  const transaction = req.body;
  controller.postTransaction(groupId, transaction).then((group: CGroup) => {
    res.type('json');
    res.json(group);
  })
});

module.exports = router;