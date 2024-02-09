const express = require("express");

const router = express.Router();

// Importation des modules de contrôleurs pour la gestion des opérations liées aux items et projets
const itemControllers = require("./controllers/itemControllers");
const projetsController = require("./controllers/projetsController");

// Routes pour les items
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.post("/items", itemControllers.add);

// Routes pour les projets
router.get("/projects", projetsController.browse); // Lister tous les projets
router.get("/projects/:id", projetsController.read); // Lire un projet spécifique par son ID
router.post("/projects", projetsController.add); // Ajouter un nouveau projet
router.put("/projects/:id", projetsController.update); // Mettre à jour un projet existant
router.delete("/projects/:id", projetsController.delete); // Supprimer un projet

module.exports = router;
