// create.js
const mongoose = require('mongoose');

// Définir le schéma du modèle
const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    age: Number
    
});

// Créer le modèle à partir du schéma
const User = mongoose.model('Utilisateur', userSchema);
// Exporter le modèle pour l'utiliser ailleurs
module.exports = User;
