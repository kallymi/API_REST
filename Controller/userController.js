const userModel= require('/models/user') 
const newUser = new User({ 
        id: 3,
        name: 'goudje', 
        email: "goudje@gmail.com" ,
        age: 11
        
    });
    
    newUser.save()
      .then(test => {
        console.log('Nouvelle personne ajoutée à la base de données :', test);
      })
      .catch(err => {
        console.error(err);
      });
    