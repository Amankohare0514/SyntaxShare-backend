const Post = require("../models/post.model")

const GetAllPosts = async (req, res) => {
    try {
        const posts = await Post.find(); 
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error });
    }
};


const CreatePost = async (req, res) => {
    const { name, title, description, image } = req.body;


    const wordCount = description.trim().split(/\s+/).length;
    if (wordCount < 20) {
        return res.status(400).json({ message: "Description should be at least 20 words long." });
    }

    const newPost = new Post({
        name,
        title,
        description,
        image
    });

    try {
        const savedPost = await newPost.save(); 
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({ message: "Error creating post", error });
    }
};

module.exports = { GetAllPosts, CreatePost };
