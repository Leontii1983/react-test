const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

const app = require('./app');



const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);

mongoose.connect(DB, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('DB connection successful!');
})






const port = process.env.PORT || 9000;
app.listen(port, ()=> {
  console.log(`App runing on port:${port}...`)
});

