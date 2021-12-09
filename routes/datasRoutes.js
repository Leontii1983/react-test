const express = require('express');
const dataController = require('../controllers/dataController');

const { getAllDatas, getDataById, createData, updateData, deleteData } = dataController;

const router = express.Router();

router
  .route('/')
  .get(getAllDatas)
  .post(createData);


  router
  .route('/:id')
  .get(getDataById)
  .patch(updateData)
  .delete(deleteData);

  module.exports = router;