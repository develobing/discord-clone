const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');
const auth = require('../middlewares/auth');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
  username: Joi.string().min(3).max(12).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

router.post(
  '/register',
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);
router.post(
  '/login',
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);

router.get('/test', auth, (req, res) => res.send('Hello World'));

module.exports = router;
