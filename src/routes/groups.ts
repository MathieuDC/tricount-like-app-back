import express, { Request, Response } from "express";
import CGroup from "../models/Group";
import User from "../models/User";

const controller = require('./../controllers/groups')

var router = express.Router();

function groupTest ()  {
  const group = new CGroup("OM");

  const user1 = new User("1", "Guendouzi", "Mateo");
  const user2 = new User("2", "Da Silva", "Gerson");
  const user3 = new User("3", "Payet", "Dimitry");

  group.add(user1);
  group.add(user2);
  group.add(user3);

  group.addTransaction({id: 1, name: "Arbitre", giver: user1, receiver: user2, amount: 10});
  group.addTransaction({id: 2, name: "Courses", giver: user2, receiver: user3, amount: 27});
  group.addTransaction({id: 3, name: "Essences", giver: user2, receiver: user1, amount: 3});
  group.addTransaction({id: 4, name: "Resto", giver: user1, receiver: user2, amount: 12});
  group.addTransaction({id: 5, name: "Bar", giver: user3, receiver: user2, amount: 24});
  group.addTransaction({id: 6, name: "Bieres", giver: user2, receiver: user1, amount: 150});
  group.addTransaction({id: 7, name: "Course", giver: user1, receiver: user3, amount: 60});

  group.computeDebt();

  return group;
};

/* GET groups listing. */
router.get('/', function(req: Request, res: Response) {
  const group = groupTest();
  res.type('json');
  res.send(JSON.stringify(group));
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

module.exports = router;