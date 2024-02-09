const ProjetsManager = require("../models/ProjetsManager");

exports.browse = async (req, res) => {
  try {
    const projets = await ProjetsManager.readAll();
    res.json(projets);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.read = async (req, res) => {
  try {
    const projet = await ProjetsManager.read(req.params.id);
    if (!projet) {
      res.status(404).send("Projet non trouvé");
    } else {
      res.json(projet);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.add = async (req, res) => {
  try {
    const id = await ProjetsManager.create(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const projet = await ProjetsManager.update(req.params.id, req.body);
    res.json(projet);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await ProjetsManager.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
