const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_DB)
  .then(()=> console.log('Database conected!'))


