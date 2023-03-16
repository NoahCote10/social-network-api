const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// route that gets all thoughts and creates one thought
router.route("/").get(getAllThoughts).post(createThought);

// route that gets, updates, and deletes thoughts
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// route that creates reaction
router.route("/:thoughtId/reactions").post(addReaction);

// route that deletes reaction
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;