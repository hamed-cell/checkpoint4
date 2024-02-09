const express = require("express");

const router = express.Router();
const projetsController = require("./src/controllers/projetsController");

// Obtenir tous les projets
router.get("/", projetsController.browse);

// Obtenir un projet spécifique par ID
router.get("/:id", projetsController.read);

// Ajouter un nouveau projet
router.post("/", projetsController.add);

// Mettre à jour un projet existant
router.put("/:id", projetsController.update);

// Supprimer un projet
router.delete("/:id", projetsController.delete);

module.exports = router;
