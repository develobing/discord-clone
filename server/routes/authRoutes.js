const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');
const auth = require('../middlewares/auth');
const Joi = require('joi');
const validator = require('../middlewares/validator');

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
  validator(registerSchema),
  authControllers.controllers.postRegister
);
router.post(
  '/login',
  validator(loginSchema),
  authControllers.controllers.postLogin
);

router.get('/test', auth, (req, res) => res.send('Hello World'));

module.exports = router;
