const app = require('./app')
const mongoose = require('mongoose');
const {DB_HOST} = process.env;

'mongodb+srv://ozeransm:6fwhELb2OOrT9JcA@cluster0.1f1qt4u.mongodb.net/db-contacts'
mongoose.connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000")
    })
  }
  )
  .catch((err)=>{
    console.log(err);
    process.exit(1);
  });


