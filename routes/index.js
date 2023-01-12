const express = require("express");
const router = express();

const middleware = require("../middleware/joi-validation");
const schemas = require("../middleware/schema");

const userController = require("../controllers/userprofile");

router.get("/test", (req, res) => res.send("Hello World! Test page"));

router.post(
  "/profile",
  middleware(schemas.profilePage, "body"),
  userController.profile
);

router.post("/getProfile", userController.getProfile);

module.exports = router;
