const router = require("express").Router();
const User = require("../models/user.model");
const Post = require("../models/post.model");

router.post("/", async (req, res, next) => {
  const { name, email, title } = req.body;
  const user = new User({
    name,
    email,
  });
  const post = new Post({
    title,
  });

  try {
    await Promise.all([user.validate(), post.validate()]);
    const userRes = await user.save();
    post.author = userRes._id;
    const postRes = await post.save();
    return res
      .status(200)
      .json({ success: true, user: userRes, post: postRes });
  } catch (err) {
    console.log("isValidErr: ", err);
    return res.status(400).json({ success: false });
  }
});

module.exports = router;
