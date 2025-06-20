const Contact = require("../model/contactmodel");

exports.createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    console.error("❌ Error saving contact:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
