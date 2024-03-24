const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
require("dotenv").config({ path: "./config/.env" });

const port = 5000;

// Middleware pour permettre l'analyse des données JSON dans les requêtes
app.use(express.json());

// Connexion à la base de données MongoDB

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connexion à la base de données réussie');
        // Démarrer le serveur une fois connecté à la base de données
        app.listen(port, () => {
            console.log('Le serveur est en cours d\'exécution sur le port', port);
        });
    })
    .catch(err => {
        console.error('Erreur de connexion à la base de données :', err);
    });

    //La requête Get
// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// La requête Post
app.post('/users', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = new User({ name, email, age });
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// La requete PUT
// app.put('/users/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { name, email, age } = req.body;
//         const updatedUser = await User.findByIdAndUpdate(id, { name, email, age }, { new: true });
//         if (!updatedUser) {
//             return res.status(404).json({ message: 'Utilisateur non trouvé' });
//         }
//         res.json(updatedUser);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });


// DELETE
// app.delete('/users/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         await User.findByIdAndDelete(id);
//         res.json({ message: 'Utilisateur supprimé avec succès' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

