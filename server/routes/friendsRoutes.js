const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const Joi = require('joi');
const validator = require('../middlewares/validator');
const friendsControllers = require('../controllers/friendsControllers');

const postFriendInvitationSchema = Joi.object({
  email: Joi.string().email().required(),
});

router.post(
  '/invite',
  auth,
  validator(postFriendInvitationSchema),
  friendsControllers.controllers.postInvite
);

module.exports = router;
