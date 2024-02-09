const db = require("../../database/client.js");

class ProjetsManager {
  // Récupérer tous les projets
  static async readAll() {
    const query = "SELECT * FROM PROJETS";
    const { rows } = await db.query(query);
    return rows;
  }

  // Récupérer un projet spécifique par ID
  static async read(id) {
    const query = "SELECT * FROM PROJETS WHERE id = $1";
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }

  // Ajouter un nouveau projet
  static async create(projet) {
    const { titre, description, image_url, date_debut, date_fin } = projet;
    const query =
      "INSERT INTO PROJETS (titre, description, image_url, date_debut, date_fin) VALUES ($1, $2, $3, $4, $5) RETURNING id";
    const { rows } = await db.query(query, [
      titre,
      description,
      image_url,
      date_debut,
      date_fin,
    ]);
    return rows[0].id;
  }

  // Mettre à jour un projet existant
  static async update(id, projet) {
    const { titre, description, image_url, date_debut, date_fin } = projet;
    const query =
      "UPDATE PROJETS SET titre = $1, description = $2, image_url = $3, date_debut = $4, date_fin = $5 WHERE id = $6 RETURNING id";
    const { rows } = await db.query(query, [
      titre,
      description,
      image_url,
      date_debut,
      date_fin,
      id,
    ]);
    return rows[0];
  }

  // Supprimer un projet
  static async delete(id) {
    const query = "DELETE FROM PROJETS WHERE id = $1";
    await db.query(query, [id]);
  }
}

module.exports = ProjetsManager;
