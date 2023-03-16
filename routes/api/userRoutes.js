const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// route that gets alls users and creates one user
router.route("/").get(getAllUsers).post(createUser);

// route that gets, updates, and deletes users
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// route that adds and deletes friends
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;