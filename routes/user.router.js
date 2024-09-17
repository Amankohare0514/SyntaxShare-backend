const express = require("express");
const router  = express.Router();
const CreateUser = require("../controller/user.controller")
const GetAllUser = require("../controller/user.controller")


router.get("/allusers" , GetAllUser)
router.post("/user" , CreateUser)


module.exports = router