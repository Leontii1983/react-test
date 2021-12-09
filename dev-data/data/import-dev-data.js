const fs = require('fs');

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Data = require('../../models/dataModel');

dotenv.config({path: '../../config.env'});

const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);

mongoose.connect(DB, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('DB connection successful!');
})


//READ JSON FILE
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));



//IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Data.create(data);
    console.log('Data successfuly loaded!');
  } catch(err) {
    console.log(err);
  }
  process.exit();
}

//DELETE ALL DATA FROM COllECTION
const deleteData = async () => {
  try {
    await Data.deleteMany();
    console.log('Data successfuly deleted!');
    
  } catch(err) {
    console.log(err);
  }
  process.exit();
}

if(process.argv[2] === '--import') {
  importData();
} else if(process.argv[2] === '--delete') {
  deleteData();
}

