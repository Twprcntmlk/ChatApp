const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { validateSignup } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../database/models");

const router = express.Router();

// Sign up
router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({user});
  })
);

module.exports = router;
