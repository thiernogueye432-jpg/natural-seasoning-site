const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Autoriser le partage de ressources et activer la lecture du JSON
app.use(cors());
app.use(express.json());

// Rendre les fichiers du dossier public (HTML, CSS, JS client) accessibles au navigateur
app.use(express.static(path.join(__dirname, 'public')));

// Déclarer et initialiser la base de données SQLite en mémoire pour le développement
const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error("Erreur de connexion à SQLite:", err.message);
    }
    console.log("Connecté à la base de données SQLite en mémoire.");
});

// Créer la table des produits d'assaisonnements et insérer des données initiales
db.serialize(() => {
    db.run(`CREATE TABLE produits (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        description TEXT,
        prix REAL NOT NULL,
        stock INTEGER NOT NULL
    )`);

       const stmt = db.prepare("INSERT INTO produits (nom, description, prix, stock) VALUES (?, ?, ?, ?)");
    stmt.run("Nokoss en Poudre - Sachet 100g", "Mélange 100% naturel de légumes verts et d'épices locales séchés pour vos repas quotidiens.", 500, 50000);
    stmt.run("Nokoss en Poudre - Sachet 500g", "Format familial ou pour restaurateurs. Idéal pour une conservation longue durée.", 2500, 6000);
    stmt.run("Tablette Bouillon Cube Naturel", "L'alternative saine aux cubes industriels, sans additifs ni exhausteurs chimiques.", 400, 10000);
    stmt.finalize();

});

// Route de l'API pour récupérer la liste complète des assaisonnements
app.get('/api/produits', (req, res) => {
    db.all("SELECT * FROM produits", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Démarrer le serveur web sur le port 3000
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});
