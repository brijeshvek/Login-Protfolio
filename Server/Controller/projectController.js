const Project = require('../model/projectmodel'); // ✅ Correct name

// GET all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

// POST create project
exports.createProjects = async (req, res) => {
  try {
    const newProject = new Project(req.body); // ✅ Correct usage
    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT update project
exports.updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE project
exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
