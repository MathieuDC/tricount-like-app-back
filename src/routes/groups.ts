import express, { Request, Response } from "express";

var router = express.Router();

/* GET groups listing. */
router.get('/', function(req: Request, res: Response) {
  res.send('respond with a group');
});

module.exports = router;