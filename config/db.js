const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('DB Connected'))
.catch((err)=>console.log(err))

// Supprimez les options useNewUrlParser et useUnifiedTopology de votre code de connexion
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('DB Connected'))
//     .catch(err => console.error('DB Connection Error:', err));
