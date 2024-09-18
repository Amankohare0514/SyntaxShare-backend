const express = require("express");
const router  = express.Router();
const {GetAllPosts , CreatePost} = require("../controller/post.conroller")

router.get("/posts" , GetAllPosts)
router.post("/post" , CreatePost)


module.exports = router