const express = require("express");
const {
  getProjects,
  createProjects,
  updateProject,
  deleteProject,
} = require("../Controller/projectController");

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProjects);
router.put("/", updateProject);
router.delete("/", deleteProject);

module.exports = router;
