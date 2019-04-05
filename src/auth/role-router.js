'use strict';

const express = require('express');
const rolesRouter = express.Router();
const auth = require('./middleware.js');
const Role = require('./roles-model');

rolesRouter.get('/public-stuff', (req, res, next) => {
  res.status(200).send('Welcome, you are not special...everyone can read this.');
});

rolesRouter.get('/hidden-stuff', auth(), (req, res, next) => {
  res.status(200).send('Welcome, you are not special...anyone with a login can read this');
});

rolesRouter.get('/something-to-read', auth('read'), (req, res, next) => {
  res.status(200).send('Welcome, you are reading things that others can\'t');
});

rolesRouter.post('/create-a-thing', auth('create'), (req, res, next) => {
  res.status(200).send('Welcome, you are able to create new content');
});

rolesRouter.put('/update', auth('update'), (req, res, next) => {
  res.status(200).send('Welcome, you are able to update things other people have created');
});

rolesRouter.patch('/jp', auth('update'), (req, res, next) => {
  res.status(200).send('Welcome, you are able to partially modify things other people have created');
});

rolesRouter.delete('/bye-bye', auth('delete'), (req, res, next) => {
  res.status(200).send('Welcome, you are able to partially modify things other people have created');
});

rolesRouter.get('/everything', auth('superuser'), (req, res, next) => {
  res.status(200).send('Welcome, you are able to do anything!');
});

rolesRouter.post('/roles', (req,res,next) => {
  let role = new Role(req.body);
  role.save();
  res.status(200).send('Saved a new role to the db');
});

module.exports = rolesRouter;
