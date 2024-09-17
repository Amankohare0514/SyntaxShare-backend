const express = require("express");
const router  = express.Router();
const {GetAllUser , CreateUser} = require("../controller/user.controller")

router.get("/allusers" , GetAllUser)
router.post("/user" , CreateUser)


module.exports = router